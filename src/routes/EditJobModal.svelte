<script lang="ts">
    let requirements: string[] = $state([]);
</script>

<!-- svelte-ignore a11y_consider_explicit_label -->
<button class="btn btn-circle btn-sm btn-warning" onclick={() => document.getElementById('edit_job_modal')?.showModal()}>
    <svg 
        xmlns="http://www.w3.org/2000/svg"
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
    >
        <g>
            <path fill="none" d="M0 0h24v24H0z"/>
            <path d="M15.728 9.686l-1.414-1.414L5 17.586V19h1.414l9.314-9.314zm1.414-1.414l1.414-1.414-1.414-1.414-1.414 
            1.414 1.414 1.414zM7.242 21H3v-4.243L16.435 3.322a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414L7.243 21z"/>
        </g>
    </svg>
</button>

<dialog id="edit_job_modal" class="modal">
    <div class="modal-box">
        <div class="header-wrapper
            flex flex-row gap-4
        ">
            <h3 class="text-lg font-bold">Edit Job Details</h3>

            <!-- svelte-ignore a11y_consider_explicit_label -->
            <button class="btn btn-circle btn-sm btn-success" onclick={() => requirements = [...requirements, String(requirements.length + 1)]}>
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
            />
        </label>

        <div class="modal-action">
            <button class="btn btn-warning">Update Job Details</button>
        </div>
    </div>
    
    <form method="dialog" class="modal-backdrop">
        <button>close</button>
    </form>
</dialog>