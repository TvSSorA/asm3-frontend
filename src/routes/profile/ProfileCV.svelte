<script lang="ts">
    let { username }: { username: string } = $props();

    let message: string = $state("");

    function hide_image() {
        const image = document.getElementById('cv-image') as HTMLImageElement;
        image.style.display = 'none';
    }

    async function upload_cv() {
        const file_input = document.getElementById('file_input') as HTMLInputElement;
        const files = file_input.files!;

        if (!files.length) {
            message = "Please select a file.";
            return;
        }

        const file = files[0];
        if (file.type !== "image/jpeg") {
            message = "Please select a JPEG image file.";
            return;
        }

        const reader = new FileReader();

        reader.onload = async function () {
            const file_content = (reader.result as string)!.split(',')[1];

            const res = await fetch('/api/cv', {
                method: 'POST',
                body: JSON.stringify({
                    username,
                    file_content
                })
            });
            const body = await res.json();

            if (res.status === 201) {
                window.location.href = "/profile";
            } 
            else {
                message = `Error: ${res.status} ${res.statusText} - ${body.message}`;
            }
        };

        reader.readAsDataURL(file);
    }

    async function delete_cv() {
        const res = await fetch('/api/cv', {
            method: 'DELETE',
            body: JSON.stringify({
                username
            })
        });
        const body = await res.json();

        if (res.status === 200) {
            window.location.href = "/profile";
        } 
        else {
            message = `Error: ${res.status} ${res.statusText} - ${body.message}`;
        }
    }
</script>

<div class="profile-cv
    card
    bg-base-100
    w-2/5
    shadow-xl
">
    <div class="card-body">
        <h2 class="card-title">Profile CV</h2>
        <div class="input-wrapper
            flex flex-row justify-between
        ">
            <input
                type="file"
                id="file_input"
                class="
                    file-input file-input-bordered file-input-primary
                    w-full max-w-xs
                "
                accept=".jpg, .jpeg"
            />

            <button class="btn btn-success" onclick={upload_cv}>
                Upload CV
            </button>

            <button class="btn btn-error" onclick={delete_cv}>
                Delete CV
            </button>
        </div>

        <h1 class="text-center text-error">{message}</h1>

        <img 
            src="https://asm3-cv-storage.s3.us-east-1.amazonaws.com/{username}-cv.jpg"
            id="cv-image"
            alt="CV"
            onerror={hide_image}
        >
    </div>
</div>