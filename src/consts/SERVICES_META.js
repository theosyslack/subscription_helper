import { DISNEY_PLUS, HULU, NETFLIX, PARAMOUNT_PLUS } from "./SERVICES"
import NetflixLogo from '../images/logos/NetflixLogo.svg'
import HuluLogo from '../images/logos/HuluLogo.svg'

export default {
    [NETFLIX]: {
        displayName: "Netflix",
        logoSrc: NetflixLogo,
        color: "#dd0a14"
    },
    [HULU]: {
        displayName: "Hulu",
        logoSrc: HuluLogo,
        color: "#1ee07f"
    },
    [PARAMOUNT_PLUS]: {
        displayName: "Paramount+",
        color: "#0164ff"
    },
    [DISNEY_PLUS]: {
        displayName: "Disney+",
        color: "#1b348c"
    } 
}
