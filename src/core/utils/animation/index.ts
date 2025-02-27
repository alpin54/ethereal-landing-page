import { Variants } from "framer-motion";

export const menuSlide: Variants = {
	initial: { x: "calc(100% + 100px)" },
	enter: { x: "0", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
	exit: {
		x: "calc(100% + 100px)",
		transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
	},
};

export const slide: Variants = {
	initial: { x: 80 },
	enter: (i: number) => ({
		x: 0,
		transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
	}),
	exit: (i: number) => ({
		x: 80,
		transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
	}),
};

export const scale: Variants = {
	open: { scale: 1, transition: { duration: 0.3 } },
	closed: { scale: 0, transition: { duration: 0.4 } },
};

export const slideLoop: Variants = {
	enter: {
		y: -80,
		opacity: 0,
	},
	center: {
		zIndex: 1,
		y: 0,
		opacity: 1,
	},
	exit: {
		zIndex: 0,
		opacity: 0,
	},
};

export const opacity = {
    initial: {
        opacity: 0
    },
    enter: {
        opacity: 0.75,
        transition: {duration: 1, delay: 0.2}
    },
}

export const slideUp = {
    initial: {
        top: 0
    },
    exit: {
        top: "-100vh",
        transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2}
    }
}