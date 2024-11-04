import Container from "../components/Container/Container"
import LeftContainer from "../components/Container/LeftContainer"
import Wallpaper from "../components/WallpaperSection/Wallpaper"
import css from '../components/ForgottenPassword/ForgottenPassword.module.css'


function RecoverPassword() {


    return (
        <Container>
            <LeftContainer>
                <div className={css.black}>
                    Forgotten Pass
                </div>
            </LeftContainer>
            <Wallpaper />
        </Container>
    )
}

export default RecoverPassword