import './presentation.style.css'
import presentationPic from '../../../assets/presentation-pic.png'

export function Presentation() {

    return (
        <div className='presentation__main'>
            <div className='presentation__main--title'>
                <h1>Web Developer</h1>
            </div>
            <div className='presentation__main--content'>
                <h2> Olá, meu nome é Carlos e sou um desenvolvedor web.</h2>
                <p align='justify'>Construo aplicações no mundo virtual com o objetivo de resolver problemas da vida real, o que, para mim, é um princípio de carreira inegociável. 
                Atualmente, utilizo JavaScript na criação de interfaces e Java/Spring Boot na criação de web API.</p>
            </div>

        </div>
    )
}