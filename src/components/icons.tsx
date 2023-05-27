import { RiShoppingCartLine, RiShoppingCartFill, RiArrowLeftLine, RiCloseLine, RiMenuLine, RiEyeLine, RiEyeFill } from "react-icons/ri"
import { FiLogIn, FiChevronRight, FiChevronLeft } from "react-icons/fi"
import { TbFidgetSpinner, TbSearch } from "react-icons/tb"
import { BiMap } from "react-icons/bi"
import { RxHamburgerMenu } from "react-icons/rx"
import { TbQuestionCircle } from "react-icons/tb"
import { IoLogoUsd } from "react-icons/io"
import { CgSpinner } from "react-icons/cg"
import { HiOutlinePlusSmall } from "react-icons/hi2"

import { IconType, IconBaseProps} from "react-icons"

export const Icons = {
    CartOutline : RiShoppingCartLine,
    CartFill : RiShoppingCartFill,
    LoginOutline : FiLogIn,
    Search : TbSearch,
    Map : BiMap,
    ChevronRight : FiChevronRight,
    ChevronLeft : FiChevronLeft,
    Menu : RiMenuLine,
    Question : TbQuestionCircle,
    ArrowLeft : RiArrowLeftLine,
    Close : RiCloseLine,
    Logo : (props : IconBaseProps) => (
        <svg {...props} viewBox="0 0 111 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.74725 43.6754C1.6734 43.6754 1.59955 43.6385 1.5257 43.5645C1.45185 43.4906 1.41492 43.4167 1.41492 43.3428L0.805665 38.6855V38.5746C0.805665 38.3898 0.916439 38.2974 1.13799 38.2974C3.3904 38.2605 5.23663 37.7245 6.6767 36.6896C8.15369 35.6546 8.89218 34.3979 8.89218 32.9194V17.728C8.89218 17.3953 8.98449 17.1181 9.16912 16.8963C9.39066 16.6746 9.64914 16.5452 9.94453 16.5082H13.2678C13.6001 16.5082 13.8586 16.6376 14.0432 16.8963C14.2647 17.1181 14.3755 17.3953 14.3755 17.728V32.5868C14.3755 34.6936 13.8401 36.5787 12.7693 38.242C11.7354 39.9422 10.2769 41.2729 8.3937 42.2339C6.51053 43.1949 4.33198 43.6754 1.85802 43.6754H1.74725Z" fill="currentColor"/>
            <path d="M50.0846 32.9194C49.7523 32.9194 49.4569 32.7901 49.1984 32.5313C48.9399 32.2726 48.8107 31.9954 48.8107 31.6997V9.74415C48.8107 9.41149 48.9399 9.13427 49.1984 8.9125C49.4569 8.65376 49.7523 8.5244 50.0846 8.5244H53.1863C53.5186 8.5244 53.7955 8.65376 54.0171 8.9125C54.2755 9.13427 54.4048 9.41149 54.4048 9.74415V31.6997C54.4048 31.9954 54.2755 32.2726 54.0171 32.5313C53.7955 32.7901 53.5186 32.9194 53.1863 32.9194H50.0846ZM42.1642 6.75021C42.0165 6.67629 41.9242 6.54692 41.8873 6.36211C41.8504 6.1773 41.8688 6.01097 41.9427 5.86312L42.2196 5.36413C42.995 3.77476 43.9735 2.62893 45.1551 1.92665C46.3367 1.22437 47.7953 0.873228 49.5307 0.873228H58.0049C58.3373 0.873228 58.6142 1.00259 58.8358 1.26133C59.0573 1.4831 59.1681 1.74184 59.1681 2.03753V4.69881C59.1681 5.03147 59.0573 5.30869 58.8358 5.53046C58.6142 5.75223 58.3373 5.86312 58.0049 5.86312H49.863C48.8292 5.86312 48.0537 6.02945 47.5368 6.36211C47.0198 6.65781 46.5398 7.2492 46.0967 8.13629C46.0598 8.28414 45.9675 8.32111 45.8198 8.24718L42.1642 6.75021Z" fill="currentColor"/>
            <path d="M72.9257 38.242C71.301 38.242 69.824 37.8724 68.4947 37.1331C67.2024 36.3939 66.1869 35.3774 65.4484 34.0837C64.71 32.7901 64.3407 31.3301 64.3407 29.7037V21.7753C64.3407 21.4057 64.4515 21.11 64.673 20.8882C64.9315 20.6665 65.2454 20.5556 65.6146 20.5556H68.6609C68.9932 20.5556 69.2886 20.685 69.5471 20.9437C69.8056 21.1655 69.9348 21.4427 69.9348 21.7753V29.3711C69.9348 30.2951 70.2487 31.1268 70.8764 31.866C71.541 32.6053 72.3349 32.9749 73.258 32.9749H79.9045C80.8645 32.9749 81.6769 32.6053 82.3415 31.866C83.0062 31.1268 83.3385 30.2951 83.3385 29.3711V7.30465C83.3385 6.97199 83.4492 6.69477 83.6708 6.473C83.8923 6.21426 84.1693 6.08489 84.5016 6.08489H87.6587C87.991 6.08489 88.2679 6.21426 88.4895 6.473C88.748 6.69477 88.8772 6.97199 88.8772 7.30465V29.7037C88.8772 31.3301 88.5079 32.7901 87.7694 34.0837C87.031 35.3774 85.9971 36.3939 84.6678 37.1331C83.3754 37.8724 81.9169 38.242 80.2922 38.242H72.9257ZM91.2588 32.9749C90.4465 32.9749 89.5049 32.8085 88.4341 32.4759L88.8772 25.1019C88.8772 25.7303 89.0987 26.2662 89.5418 26.7098C89.9849 27.1533 90.5573 27.3751 91.2588 27.3751H92.422V32.9749H91.2588Z" fill="currentColor"/>
            <path d="M89.5241 13.2925C89.3764 13.1816 89.3025 13.0707 89.3025 12.9599C89.3025 12.812 89.3949 12.6457 89.5795 12.4609L95.7828 5.1978C96.0782 4.9021 96.3552 4.88362 96.6136 5.14236L99.0507 7.2492C99.2722 7.39705 99.2907 7.60034 99.1061 7.85908L92.9027 15.1221C92.6073 15.4178 92.3304 15.4733 92.0719 15.2885L89.5241 13.2925ZM89.5241 27.3751H102.152C103.223 27.3751 104.054 27.2273 104.645 26.9316C105.236 26.6359 105.531 26.063 105.531 25.2128C105.531 24.4736 105.236 23.9191 104.645 23.5495C104.091 23.1799 103.352 22.9951 102.429 22.9951H95.5059C94.5459 22.9951 93.752 22.6255 93.1243 21.8862C92.4965 21.147 92.1827 20.3338 92.1827 19.4467C92.1827 18.8553 92.3488 18.3379 92.6812 17.8943L101.488 7.36009C101.783 6.9535 102.115 6.75021 102.485 6.75021C102.817 6.75021 103.131 6.87958 103.426 7.13831L105.642 8.80161C106.048 9.13427 106.251 9.46693 106.251 9.79959C106.251 10.0953 106.103 10.4279 105.808 10.7976L100.158 17.5062H103.205C104.829 17.5062 106.214 17.8758 107.359 18.6151C108.54 19.3543 109.427 20.3153 110.017 21.4981C110.645 22.6809 110.959 23.9376 110.959 25.2683C110.959 27.3381 110.276 29.1308 108.91 30.6463C107.58 32.1617 105.679 32.9194 103.205 32.9194H89.5241V27.3751Z" fill="currentColor"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M23.5685 27.3751H37.6368C38.486 27.3751 39.0953 27.0979 39.4646 26.5435C39.8707 25.9521 40.0738 25.1943 40.0738 24.2703V16.231C40.0738 15.8614 40.1846 15.5657 40.4061 15.3439C40.6277 15.0852 40.9046 14.9558 41.2369 14.9558H44.2832C44.6525 14.9558 44.9479 15.0852 45.1694 15.3439C45.391 15.5657 45.5017 15.8614 45.5017 16.231V24.2703C45.5017 26.8946 44.7817 28.983 43.3416 30.5354C41.9385 32.0878 40.0369 32.864 37.6368 32.864H26.8995H24.6848C24.3034 32.8206 23.9312 32.7519 23.5685 32.6577V27.3751Z" fill="currentColor"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M26.8995 32.864H24.6848C24.3034 32.8206 23.9312 32.7519 23.5685 32.6577C22.8924 32.4821 22.2488 32.2182 21.6377 31.866C20.4192 31.1268 19.4591 30.1473 18.7576 28.9275C18.056 27.7078 17.7052 26.3956 17.7052 24.991V7.2492C17.7052 6.9535 17.8345 6.69477 18.0929 6.473C18.3514 6.21426 18.6468 6.08489 18.9791 6.08489H22.0808C22.3762 6.08489 22.6531 6.21426 22.9116 6.473C23.1701 6.69477 23.2993 6.9535 23.2993 7.2492V24.991C23.2993 26.5804 24.0932 27.3751 25.681 27.3751H26.8995V32.864Z" fill="currentColor"/>
            <path d="M22.8645 40.529C22.5321 40.529 22.2368 40.3997 21.9783 40.1409C21.7567 39.9191 21.646 39.6419 21.646 39.3093V35.9827C21.646 35.687 21.7567 35.4282 21.9783 35.2065C22.2368 34.9847 22.5321 34.8738 22.8645 34.8738H26.1877C26.52 34.8738 26.797 34.9847 27.0185 35.2065C27.2401 35.4282 27.3508 35.687 27.3508 35.9827V39.3093C27.3508 39.6419 27.2401 39.9191 27.0185 40.1409C26.797 40.3997 26.52 40.529 26.1877 40.529H22.8645Z" fill="currentColor"/>
            <path d="M29.7879 40.529C29.4555 40.529 29.1601 40.3997 28.9017 40.1409C28.6801 39.9191 28.5693 39.6419 28.5693 39.3093V35.9827C28.5693 35.687 28.6801 35.4282 28.9017 35.2065C29.1601 34.9847 29.4555 34.8738 29.7879 34.8738H33.1111C33.4434 34.8738 33.7203 34.9847 33.9419 35.2065C34.1634 35.4282 34.2742 35.687 34.2742 35.9827V39.3093C34.2742 39.6419 34.1634 39.9191 33.9419 40.1409C33.7203 40.3997 33.4434 40.529 33.1111 40.529H29.7879Z" fill="currentColor"/>
            <path d="M35.8251 40.1409C36.0835 40.3997 36.3789 40.529 36.7112 40.529H40.0345C40.3668 40.529 40.6437 40.3997 40.8653 40.1409C41.0868 39.9191 41.1976 39.6419 41.1976 39.3093V35.9827C41.1976 35.687 41.0868 35.4282 40.8653 35.2065C40.6437 34.9847 40.3668 34.8738 40.0345 34.8738H36.7112C36.3789 34.8738 36.0835 34.9847 35.8251 35.2065C35.6035 35.4282 35.4927 35.687 35.4927 35.9827V39.3093C35.4927 39.6419 35.6035 39.9191 35.8251 40.1409Z" fill="currentColor"/>
        </svg>
    ),
    Logo2 : (props : IconBaseProps) => (
        <svg {...props} viewBox="0 0 128 55" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.4855 49.416C1.40017 49.416 1.31483 49.3733 1.2295 49.288C1.14417 49.2027 1.1015 49.1173 1.1015 49.032L0.397499 43.656V43.528C0.397499 43.3147 0.525499 43.208 0.781499 43.208C3.38417 43.1653 5.5175 42.5467 7.1815 41.352C8.88817 40.1573 9.7415 38.7067 9.7415 37V19.464C9.7415 19.08 9.84817 18.76 10.0615 18.504C10.3175 18.248 10.6162 18.0987 10.9575 18.056H14.7975C15.1815 18.056 15.4802 18.2053 15.6935 18.504C15.9495 18.76 16.0775 19.08 16.0775 19.464V36.616C16.0775 39.048 15.4588 41.224 14.2215 43.144C13.0268 45.1067 11.3415 46.6427 9.1655 47.752C6.9895 48.8613 4.47217 49.416 1.6135 49.416H1.4855ZM29.141 37C27.4343 37 25.877 36.5947 24.469 35.784C23.061 34.9307 21.9517 33.8 21.141 32.392C20.3303 30.984 19.925 29.4693 19.925 27.848V7.368C19.925 7.02667 20.0743 6.728 20.373 6.472C20.6717 6.17333 21.013 6.024 21.397 6.024H24.981C25.3223 6.024 25.6423 6.17333 25.941 6.472C26.2397 6.728 26.389 7.02667 26.389 7.368V27.848C26.389 29.6827 27.3063 30.6 29.141 30.6H30.549V37H29.141ZM26.7 30.6H42.956C43.9373 30.6 44.6413 30.28 45.068 29.64C45.5373 28.9573 45.772 28.0827 45.772 27.016V17.736C45.772 17.3093 45.9 16.968 46.156 16.712C46.412 16.4133 46.732 16.264 47.116 16.264H50.636C51.0627 16.264 51.404 16.4133 51.66 16.712C51.916 16.968 52.044 17.3093 52.044 17.736V27.016C52.044 30.0453 51.212 32.456 49.548 34.248C47.9267 36.04 45.7293 36.936 42.956 36.936H26.7V30.6ZM30.284 46.792C29.9 46.792 29.5587 46.6427 29.26 46.344C29.004 46.088 28.876 45.768 28.876 45.384V41.544C28.876 41.2027 29.004 40.904 29.26 40.648C29.5587 40.392 29.9 40.264 30.284 40.264H34.124C34.508 40.264 34.828 40.392 35.084 40.648C35.34 40.904 35.468 41.2027 35.468 41.544V45.384C35.468 45.768 35.34 46.088 35.084 46.344C34.828 46.6427 34.508 46.792 34.124 46.792H30.284ZM34.572 54.408C34.188 54.408 33.8467 54.2587 33.548 53.96C33.292 53.704 33.164 53.384 33.164 53V49.16C33.164 48.8187 33.292 48.4987 33.548 48.2C33.8467 47.944 34.188 47.816 34.572 47.816H38.412C38.796 47.816 39.0947 47.944 39.308 48.2C39.564 48.456 39.692 48.776 39.692 49.16V53C39.692 53.384 39.564 53.704 39.308 53.96C39.0947 54.2587 38.796 54.408 38.412 54.408H34.572ZM38.156 46.792C37.8147 46.792 37.4947 46.6427 37.196 46.344C36.94 46.088 36.812 45.768 36.812 45.384V41.544C36.812 41.2027 36.94 40.904 37.196 40.648C37.4947 40.392 37.8147 40.264 38.156 40.264H41.996C42.38 40.264 42.7 40.392 42.956 40.648C43.212 40.904 43.34 41.2027 43.34 41.544V45.384C43.34 45.768 43.212 46.088 42.956 46.344C42.7 46.6427 42.38 46.792 41.996 46.792H38.156ZM57.3395 37C56.9555 37 56.6142 36.8507 56.3155 36.552C56.0168 36.2533 55.8675 35.9333 55.8675 35.592V10.248C55.8675 9.864 56.0168 9.544 56.3155 9.288C56.6142 8.98933 56.9555 8.84 57.3395 8.84H60.9235C61.3075 8.84 61.6275 8.98933 61.8835 9.288C62.1822 9.544 62.3315 9.864 62.3315 10.248V35.592C62.3315 35.9333 62.1822 36.2533 61.8835 36.552C61.6275 36.8507 61.3075 37 60.9235 37H57.3395ZM48.1875 6.792C48.0168 6.70666 47.9102 6.55733 47.8675 6.344C47.8248 6.13066 47.8462 5.93866 47.9315 5.768L48.2515 5.192C49.1475 3.35733 50.2782 2.03467 51.6435 1.224C53.0088 0.413333 54.6942 0.00799942 56.6995 0.00799942H66.4915C66.8755 0.00799942 67.1955 0.157332 67.4515 0.455997C67.7075 0.711999 67.8355 1.01067 67.8355 1.352V4.424C67.8355 4.808 67.7075 5.128 67.4515 5.384C67.1955 5.64 66.8755 5.768 66.4915 5.768H57.0835C55.8888 5.768 54.9928 5.96 54.3955 6.344C53.7982 6.68533 53.2435 7.368 52.7315 8.392C52.6888 8.56267 52.5822 8.60533 52.4115 8.52L48.1875 6.792ZM83.7325 43.144C81.8552 43.144 80.1485 42.7173 78.6125 41.864C77.1192 41.0107 75.9458 39.8373 75.0925 38.344C74.2392 36.8507 73.8125 35.1653 73.8125 33.288V24.136C73.8125 23.7093 73.9405 23.368 74.1965 23.112C74.4952 22.856 74.8578 22.728 75.2845 22.728H78.8045C79.1885 22.728 79.5298 22.8773 79.8285 23.176C80.1272 23.432 80.2765 23.752 80.2765 24.136V32.904C80.2765 33.9707 80.6392 34.9307 81.3645 35.784C82.1325 36.6373 83.0498 37.064 84.1165 37.064H91.7965C92.9058 37.064 93.8445 36.6373 94.6125 35.784C95.3805 34.9307 95.7645 33.9707 95.7645 32.904V7.432C95.7645 7.048 95.8925 6.728 96.1485 6.472C96.4045 6.17333 96.7245 6.024 97.1085 6.024H100.757C101.141 6.024 101.461 6.17333 101.716 6.472C102.015 6.728 102.165 7.048 102.165 7.432V33.288C102.165 35.1653 101.738 36.8507 100.884 38.344C100.031 39.8373 98.8365 41.0107 97.3005 41.864C95.8072 42.7173 94.1218 43.144 92.2445 43.144H83.7325ZM104.917 37.064C103.978 37.064 102.89 36.872 101.653 36.488L102.165 27.976C102.165 28.7013 102.421 29.32 102.932 29.832C103.444 30.344 104.106 30.6 104.917 30.6H106.261V37.064H104.917ZM102.912 14.344C102.741 14.216 102.656 14.088 102.656 13.96C102.656 13.7893 102.763 13.5973 102.976 13.384L110.144 5C110.485 4.65867 110.805 4.63733 111.104 4.936L113.92 7.368C114.176 7.53867 114.197 7.77333 113.984 8.072L106.816 16.456C106.475 16.7973 106.155 16.8613 105.856 16.648L102.912 14.344ZM102.912 30.6H117.504C118.741 30.6 119.701 30.4293 120.384 30.088C121.067 29.7467 121.408 29.0853 121.408 28.104C121.408 27.2507 121.067 26.6107 120.384 26.184C119.744 25.7573 118.891 25.544 117.824 25.544H109.824C108.715 25.544 107.797 25.1173 107.072 24.264C106.347 23.4107 105.984 22.472 105.984 21.448C105.984 20.7653 106.176 20.168 106.56 19.656L116.736 7.496C117.077 7.02666 117.461 6.792 117.888 6.792C118.272 6.792 118.635 6.94133 118.976 7.24L121.536 9.16C122.005 9.544 122.24 9.928 122.24 10.312C122.24 10.6533 122.069 11.0373 121.728 11.464L115.2 19.208H118.72C120.597 19.208 122.197 19.6347 123.52 20.488C124.885 21.3413 125.909 22.4507 126.592 23.816C127.317 25.1813 127.68 26.632 127.68 28.168C127.68 30.5573 126.891 32.6267 125.312 34.376C123.776 36.1253 121.579 37 118.72 37H102.912V30.6Z" fill="currentColor"/>
        </svg>
    ),
    Dollar : IoLogoUsd,
    Spinner : CgSpinner,
    Plus : HiOutlinePlusSmall,
    EyeLine : RiEyeLine,
    EyeFill : RiEyeFill,
}