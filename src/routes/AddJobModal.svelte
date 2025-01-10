<script lang="ts">
    let { username }: { username: string } = $props();

    let title: string = $state('');
    let requirements: string[] = $state([]);
    let salary: number = $state(0);

    let message: string = $state('');

    async function save_job() {
        const res = await fetch('/api/post', {
            method: 'POST',
            body: JSON.stringify({
                title,
                company: username,
                requirements,
                salary
            })
        });
        const body = await res.json();

        if (res.status === 201) {
            window.location.href = '/';
        }   
        else {
            message = `Error: ${res.status} ${res.statusText} - ${body.message}`;
        }
    }
</script>

<button class="btn btn-primary" onclick={() => document.getElementById('add_job_modal')?.showModal()}>
    Add job
</button>

<dialog id="add_job_modal" class="modal">
    <div class="modal-box">
        <div class="header-wrapper
            flex flex-row gap-4
        ">
            <h3 class="text-lg font-bold">Add New Job</h3>

            <!-- svelte-ignore a11y_consider_explicit_label -->
            <button class="btn btn-circle btn-sm btn-success" onclick={() => requirements = [...requirements, '']}>
                <svg 
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    data-name="Line Color"
                >
                    <path 
                        id="primary" 
                        d="M5,12H19M12,5V19" 
                        style="fill: none; stroke: rgb(0, 0, 0); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;">
                    </path>
                </svg>
            </button>
        </div>

        <label class="form-control w-full">
            <div class="label">
                <span class="label-text">Job Title</span>
            </div>

            <input 
                type="text"
                placeholder="Title"
                class="input input-bordered w-full"
                bind:value={title}
            />
        </label>

        <label class="form-control w-full">
            <div class="label
                flex flex-row justify-left
            ">
                <span class="label-text">Job Requirements</span>
            </div>

            {#each requirements as requirement, i}
                <div class="requirement-input-wrapper
                    flex flex-row justify-between items-center
                ">
                    <input 
                        type="text"
                        placeholder="Requirement"
                        class="input input-bordered basis-3/4"
                        bind:value={requirements[i]}
                    />

                    <!-- svelte-ignore a11y_consider_explicit_label -->
                    <button class="btn btn-circle btn-sm btn-error" onclick={() => requirements = requirements.filter((_, index) => index !== i)}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M6 18L18 6M6 6l12 12" 
                            />
                        </svg>
                    </button>
                </div>
            {/each}
        </label>

        <label class="form-control w-full">
            <div class="label">
                <span class="label-text">Salary</span>
            </div>

            <input 
                type="number"
                min="100000"
                step="100000"
                placeholder="Salary"
                class="input input-bordered w-full"
                bind:value={salary}
            />
        </label>

        <h1 class="text-center text-error">{message}</h1>

        <div class="modal-action">
            <button class="btn btn-primary" onclick={save_job}>Add Job</button>
        </div>
    </div>
    
    <form method="dialog" class="modal-backdrop">
        <button>close</button>
    </form>
</dialog>