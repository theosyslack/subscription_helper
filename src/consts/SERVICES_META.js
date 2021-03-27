import { DISNEY_PLUS, HULU, NETFLIX, PARAMOUNT_PLUS } from "./SERVICES"
import ParamountPlusLogo from '../images/logos/ParamountPlusLogo.svg'
import DisneyPlusLogo from '../images/logos/DisneyPlusLogo.svg'
import NetflixLogo from '../images/logos/NetflixLogo.svg'
import HuluLogo from '../images/logos/HuluLogo.svg'

const SERVICES_META = {
    [NETFLIX]: {
        displayName: "Netflix",
        logoSrc: NetflixLogo,
        color: "#dd0a14",
        unsubscribeHref: "https://www.netflix.com/YourAccount",
    },
    [HULU]: {
        displayName: "Hulu",
        logoSrc: HuluLogo,
        color: "#1ee07f",
        unsubscribeHref: "https://secure.hulu.com/account",
    },
    [PARAMOUNT_PLUS]: {
        logoSrc: ParamountPlusLogo,
        displayName: "Paramount+",
        unsubscribeHref: "https://www.paramountplus.com/account/",
        color: "#0164ff"
    },
    [DISNEY_PLUS]: {
        logoSrc: DisneyPlusLogo,
        displayName: "Disney+",
        unsubscribeHref: "https://www.disneyplus.com/account",
        color: "#1b348c"
    } 
}

export default SERVICES_META