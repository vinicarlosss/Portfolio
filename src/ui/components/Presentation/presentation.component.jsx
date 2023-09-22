import { useTypewriter, Cursor } from 'react-simple-typewriter'
import './presentation.style.css'
import reactImg from '../../../assets/react.png'

export function Presentation() {
    const [text] = useTypewriter({
        words: ['Olá, me chamo Carlos e sou seu Desenvolvedor Web :)'],
        typeSpeed: 50,
    });

    return (
        <section className='presentation__main'>
            <div className='presentation__main--title'>
                <img className='presentation__main--title--reactImg' src={reactImg}/>
            </div>
            <div className='presentation__main--content'>
                <div className='presentation__main--content--title'>
                    <span className='presentation__main--content--title__text'>{text}</span>
                    <span className='presentation__main--content--title__cursor'>
                        <Cursor/>
                    </span>
                </div>
                <br/>
                <p className='presentation__main--content--paragraph' align='justify'>Construo aplicações no mundo virtual com o objetivo de resolver problemas da vida real.
                    Atualmente, utilizo JavaScript na criação de interfaces e Java/Spring Boot na criação de web API.</p>
            </div>

        </section >
    )
}