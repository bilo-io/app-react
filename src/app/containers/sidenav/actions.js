export const SIDENAV_TOGGLE = 'SIDENAV_TOGGLE';

export const toggleSidenav = (isOpen) => {
    return {
        type: SIDENAV_TOGGLE,
        isOpen: !isOpen
    }
}