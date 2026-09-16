<template>
  <div
    class="pointer-events-none fixed inset-0 -z-10 text-ink opacity-[0.07]"
    aria-hidden="true"
  >
    <svg class="size-full">
      <defs>
        <pattern
          id="circuit-pattern"
          width="240"
          height="240"
          patternUnits="userSpaceOnUse"
        >
          <g
            fill="none"
            stroke="currentColor"
            stroke-width="1.3"
          >
            <path d="M10,30 H70 L90,50 V100" />

            <path
              d="M10,30 H70 L90,50 V100"
              transform="translate(0,7)"
            />

            <path
              d="M10,30 H70 L90,50 V100"
              transform="translate(0,14)"
            />

            <path d="M150,15 V55 L170,75 H225" />

            <path d="M15,140 H45 L60,155 V190 L75,205 H115" />

            <path d="M170,160 H200 L215,175 V210" />
          </g>

          <g
            fill="none"
            stroke="currentColor"
            stroke-width="1.2"
          >
            <circle
              cx="10"
              cy="30"
              r="4"
            />

            <circle
              cx="90"
              cy="100"
              r="4"
            />

            <circle
              cx="150"
              cy="15"
              r="4"
            />

            <circle
              cx="225"
              cy="75"
              r="4"
            />

            <circle
              cx="15"
              cy="140"
              r="4"
            />

            <circle
              cx="115"
              cy="205"
              r="4"
            />

            <circle
              cx="170"
              cy="160"
              r="4"
            />

            <circle
              cx="215"
              cy="210"
              r="4"
            />
          </g>

          <g fill="currentColor">
            <rect
              x="184"
              y="124"
              width="3"
              height="3"
            />

            <rect
              x="194"
              y="124"
              width="3"
              height="3"
            />

            <rect
              x="184"
              y="134"
              width="3"
              height="3"
            />

            <rect
              x="194"
              y="134"
              width="3"
              height="3"
            />

            <circle
              cx="50"
              cy="80"
              r="1.5"
            />

            <circle
              cx="140"
              cy="100"
              r="1.5"
            />

            <circle
              cx="200"
              cy="40"
              r="1.5"
            />

            <circle
              cx="30"
              cy="200"
              r="1.5"
            />

            <circle
              cx="130"
              cy="150"
              r="1.5"
            />
          </g>
        </pattern>
      </defs>

      <rect
        width="100%"
        height="100%"
        fill="url(#circuit-pattern)"
      />
    </svg>
  </div>
</template>
