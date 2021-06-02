import '../../static/css/product-cards.css'
import Card_item from './Card'
import newspaper from '../../static/images/newspaper.jpg'
import magazines from '../../static/images/magazines.jpg'
import books from '../../static/images/books.jpg'

function Products() {
    const products = [
        {
            name: "Books",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vestibulum mattis ullamcorper velit sed ullamcorper. Nullam ac tortor vitae purus faucibus ornare suspendisse sed.",
            image:books,
            link:"#"
        },
        {
            name: "Magazines",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vestibulum mattis ullamcorper velit sed ullamcorper. Nullam ac tortor vitae purus faucibus ornare suspendisse sed.",
            image:magazines,
            link:"#"
        },
        {
            name: "Newspapers",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vestibulum mattis ullamcorper velit sed ullamcorper. Nullam ac tortor vitae purus faucibus ornare suspendisse sed.",
            image:newspaper,
            link:"#"
        },
    ]
   
    const product_list_heading={
        fontSize: "240%",
        fontWeight: "700",
        textAlign: "center",
        padding:"0px"
    };

    return(<>
        <div style={product_list_heading}>What we serve to the public?</div>;
        {products.map((item)=>{
        console.log(item)
        return (<Card_item name={item.name} description={item.description} image={item.image} key={item.name} />)
    })}
    </>)
    
}

export default Products;