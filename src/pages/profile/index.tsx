import { PortfolioProps } from '../../props/props'
import { Me } from '../../component/profile/Me'

const Profile = (props: PortfolioProps) => {
    return (
        <Me props={props} />
    )
}

Profile.getInitialProps = async () => {
    const res = await fetch("https://api.takurinton.com/portfolio/v1/")
    return await res.json()
    // return portfolio mock
}

export default Profile