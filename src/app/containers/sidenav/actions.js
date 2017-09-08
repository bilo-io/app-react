export const TOGGLE_SIDENAV = 'TOGGLE_SIDENAV';

export const toggleSidenav = (isOpen) => {
    return {
        action: TOGGLE_SIDENAV,
        isOpen: !isOpen
    }
}