export const SIDENAV_TOGGLE = 'SIDENAV_TOGGLE';

export const toggleSidenav = (isOpen) => {
    console.log({isOpen})
    return {
        type: SIDENAV_TOGGLE,
        isOpen: !isOpen
    }
}