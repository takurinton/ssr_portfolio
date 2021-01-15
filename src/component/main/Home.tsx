import { Gopher } from '../../component/common/Character/Gopher'
import { Welcome } from '../../component/main/Welcome'

export const Home = () => {
    return (
        <div>
          <Gopher />
          <Welcome />
        </div>
    )
}