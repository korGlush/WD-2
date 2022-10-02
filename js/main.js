const Link = (props) => {
    return (
        <a href={props.href} className={props.className}>
            {props.children}
        </a>
    )
}
const Nav = (props) => {
    return (
        <nav className={props.className}>
            {props.children}
        </nav>
    )
}
const Button = (props) => {
    return (
        <button className={props.className}>
            {props.children}
        </button>
    )
}
const Form = (props) => {
    return (
        <form className={props.className} action={props.action}>
            {props.children}
        </form>
    )
}
const Input = (props) => {
    return (
        <input className={props.className} type={props.type} name={props.name} placeholder={props.placeholder} />
    )
}
const Section = (props) => {
    return (
        <section className={props.className}>
            {props.children}
        </section>
    )
}
const Header = () => {
    return (
        <header className="header">
            <div className="container block block_header">
                <Link href="/" className="logo link">wd</Link>
                <Nav className="navigation">
                    <Link href="#" className="link nav_item">Главная</Link>
                    <Link href="#" className="link nav_item">Об авторе</Link>
                    <Link href="#" className="link nav_item">Работы</Link>
                    <Link href="#" className="link nav_item">Процесс</Link>
                    <Link href="#" className="link nav_item">Контакты</Link>
                </Nav>
            </div>
        </header>
    )
}
const Hero = () => {
    return (
        <Section className="section section_hero">
            <div className="container block design_block">
                <img src="img/netbook.png" alt="ноутбук" className="hero_img" />
                <div className="hero_info">
                    <h1 className="hero_title">Дизайн и верстка</h1>
                    <p className="hero_desc desc">Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.</p>
                    <Button className="button button_primary hero_info_button">
                        Написать мне
                    </Button>
                </div>
            </div>
        </Section>
    )
}
const About = () => {
    return (
        <Section className="section section_about">
            <div className="container block-center block_info">
                <h2 className="section_title about_me_title">Обо мне</h2>
                <p className="desc section_desc desc_about_me">Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.</p>
            </div>
        </Section>
    )
}
const Projects = () => {
    return (
        <Section className="section proekti">
            <div className="container block projects_block">
                <img src="img/project.svg" alt="" className="block_img projects_1" />
                <h3 className="back_h projects_1">40+</h3>
                <p className="back_p projects_1"><br />проектов</p>
                <img src="img/project.svg" alt="" className="block_img projects_2" />
                <h3 className="back_h projects_2">40+</h3>
                <p className="back_p projects_2"><br />проектов</p>
                <img src="img/project.svg" alt="" className="block_img projects_3" />
                <h3 className="back_h projects_3">40+</h3>
                <p className="back_p projects_3"><br />проектов</p>
                <img src="img/project.svg" alt="" className="block_img projects_4" />
                <h3 className="back_h projects_4">40+</h3>
                <p className="back_p projects_4"><br />проектов</p>
                <img src="img/project.svg" alt="" className="block_img projects_5" />
                <h3 className="back_h projects_5">40+</h3>
                <p className="back_p projects_5"><br />проектов</p>
                <img src="img/project.svg" alt="" className="block_img projects_6" />
                <h3 className="back_h projects_6">40+</h3>
                <p className="back_p projects_6"><br />проектов</p>
            </div>
        </Section>
    ) 
}
const Skills = () => {
    return (
        <Section className="section naviki">
            <div className="container block block_hero">
                 <div className="skills_info">
                     <h2 className="info_title">Мои навыки</h2>
                     <div className="skills_bar">
                        <p className="desc_skills">Adobe Photoshop</p>
                        <div className="line"></div>
                        <p className="desc_skills">Adobe Photoshop</p>
                        <div className="line"></div>
                        <p className="desc_skills">Adobe Photoshop</p>
                        <div className="line"></div>            
                    </div>
                 </div>
                 <div className="coolman_img_container">
                    <img src="img/coolman.png" alt="coolman" className="photo" />
                 </div>
            </div>
        </Section>
    )
}
const Work = () => {
    return (
        <Section className="section work">
            <div className="container block-center block_info">
                <h2 className="section_title work">Как я работаю</h2>
                <p className="desc section_desc">Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.</p>
            </div>
            <div className="container video">
                <img src="img/play.png" alt="пуск" className="video_play" />
            </div>
        </Section>
    )
}
const Photos = () => {
    return (
        <Section className="section_pictures">
            <div className="pictures_block">
                <div className="container_pictures">
                    <Link href="#" className="link_img"><img src="img/papers.png" alt="picture" className="pic1" /></Link>
                    <Link href="#" className="link_img"><img src="img/netbook(weye).png" alt="picture" className="pic1" /></Link>
                    <Link href="#" className="link_img"><img src="img/papers.png" alt="picture" className="pic1" /></Link>
                    <Link href="#" className="link_img"><img src="img/netbook(weye).png" alt="picture" className="pic1" /></Link>
                    <Link href="#" className="link_img"><img src="img/netbook(weye).png" alt="picture" className="pic1" /></Link>
                    <Link href="#" className="link_img"><img src="img/papers.png" alt="picture" className="pic1" /></Link>
                    <Link href="#" className="link_img"><img src="img/netbook(weye).png" alt="picture" className="pic1" /></Link>
                    <Link href="#" className="link_img"><img src="img/papers.png" alt="picture" className="pic1" /></Link>
                </div>
            </div>
        </Section>
    )
}
const MicroSoft = () => {
    return (
        <Section className="section microsoft_photos">
            <div className="conatainer photo_microsoft">
                <img src="img/Microsoft.png" alt="Микрософт" className="microsoft microsoft_1" />
                <img src="img/Microsoft.png" alt="Микрософт" className="microsoft microsoft_2" />
                <img src="img/Microsoft.png" alt="Микрософт" className="microsoft microsoft_3" />
                <img src="img/Microsoft.png" alt="Микрософт" className="microsoft microsoft_4 last_microsoft" />
            </div>
        </Section>
    )
}
const Sending = () => {
    return (
        <Section className="section sending">
            <div className="container block-center block_info">
                <h2 className="section_title web_site">Хотите веб-сайт?</h2>
                <p className="desc section_desc">Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.</p>
                <Form action="#" className="form form-question">
                    <div className="input-group">
                        <Input type="text" name="firstname" placeholder="Ваше имя" className="input input--half input_name" />
                        <Input type="email" name="email" placeholder="Ваш e-mail" className="input input--half input_mail" />
                    </div>
                    <textarea name="message" placeholder="Сообщение" className="input input--message"></textarea>
                    <div className="buttons">
                        <Input type="submit" className="button button_primary" />
                    </div>
                </Form>
            </div>
        </Section>
    )
}
const Footer = () => {
    return (
        <footer>
            <Section className="section footer">
                <div className="container block footer_desc">
                    <div className="footer_hero">
                        <h3 className="footer_hero_name">Иванов Иван</h3>
                        <p className="footer_hero_desc">(с) 2018. Все права защищены.</p>
                    </div>
                    <div className="vk_links">
                        <Link href="#" className="vk_links"><img src="img/Vector.svg" alt="вк" className="vk_link vk_1" /></Link>
                        <Link href="#" className="vk_links"><img src="img/Vector.svg" alt="вк" className="vk_link vk_2" /></Link>
                        <Link href="#" className="vk_links"><img src="img/Vector.svg" alt="вк" className="vk_link vk_3" /></Link>
                    </div>
                </div>
            </Section>
        </footer>
    )
}

const renderJSX = (
    <>
        <Header />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Work />
        <Photos />
        <MicroSoft />
        <Sending />
        <Footer />
    </>
)

ReactDOM.render(renderJSX, document.getElementById('root'))