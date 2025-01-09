<script lang="ts">
    import VNDIcon from '$lib/assets/vnd-icon.svg';
</script>

<div class="
    card
    bg-base-100
    w-full
    shadow-xl
">
    <div class="card-body
        flex flex-col gap-8
    ">
        <div class="basic-details
            flex flex-col gap-2
        ">
            <h2 class="card-title">Job Title</h2>
            <p>Company name</p>

            <div class="salary
                flex flex-row items-center gap-2
            ">
                <div class="vnd-icon w-5">
                    <img src={VNDIcon} alt="VND Icon">
                </div>
                
                <h1 class="
                    card-title
                    text-accent underline
                ">
                    Salary
                </h1>
            </div>
        </div>

        <button class="btn btn-primary btn-block">
            Apply Now
        </button>

        <div class="requirements">
            <h2 class="card-title">Job Requirements</h2>

            <ul class="list-disc list-inside">
                <li>Requirement 1</li>
                <li>Requirement 2</li>
                <li>Requirement 3</li>
            </ul>
        </div>
    </div>
</div>