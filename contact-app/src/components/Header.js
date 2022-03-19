
export default function Header(){
    return(
        <header>
            <h1>React Contact</h1>
            <nav>{/* nav element is where the <Link> function will be in*/}
                <Link to='/'>All Contacts</Link>
                <Link to='/new-contact'>Add New Contact</Link>
            </nav>
        </header>
    )
}