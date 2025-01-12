<script lang="ts">
    import ChangePasswordModal from "./ChangePasswordModal.svelte";
    import DeleteAccountModal from "./DeleteAccountModal.svelte";

    let { user }: { user: Omit<User, "password"> } = $props();
    const { username, first_name, last_name } = user;

    async function logout() {
        document.cookie = "token=; path=/; SameSite=lax; Expires=Thu, 01 Jan 1970 00:00:00 GMT; Secure";
        window.location.href = "/";
    }
</script>

<div class="basic-details
    card
    bg-base-100
    w-2/5
    shadow-xl
">
    <div class="card-body">
        <div class="wrapper
            flex flex-row justify-between
        ">
            <h2 class="card-title">{first_name} {last_name}</h2>
            <!-- svelte-ignore a11y_consider_explicit_label -->
            <button class="btn btn-circle btn-error btn-outline" onclick={logout}>
                <svg 
                    width="20px"
                    height="20px"
                    viewBox="0 0 16 16"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                    <rect width="16" height="16" id="icon-bound" fill="none" />
                    <path d="M14,14l0,-12l-6,0l0,-2l8,0l0,16l-8,0l0,-2l6,0Zm-9.002,-0.998l-4.998,-5.002l5,-5l1.416,1.416l-2.588,2.584l8.172,0l0,
                    2l-8.172,0l2.586,2.586l-1.416,1.416Z"
                    />
                </svg>
            </button>
        </div>

        <p>{username}</p>
        <div class="card-actions justify-between">
            <ChangePasswordModal {username} />
            <DeleteAccountModal {username} />
        </div>
    </div>
</div>