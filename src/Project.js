function Project(){
return(
<div className="main-content">
    <div className="header">
        <div>
            <span className="fa fa-mobile" style={{fontSize:"60px" , paddingLeft:"55px"}}></span>
            <h4>Mobile World</h4>
        </div>

        <div>
            <input type="text" placeholder="Search Product" style={{width:"200px" , padding:"5px"}} />
            <button type="button" className="btn btn-outline-danger">Search</button>
        </div>

        <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQis0IGoVjR7LwZ2XiTuxaRUR575gMdxdTOrQ&s"
                alt="fdf" style={{width:"40px"}} />
        </div>

        <div>
            <p> <span className="fa fa-user"></span>vadlashaikneehal@gmail.com</p>
        </div>

        <div>
            <button type="" className="btn btn-outline-danger">Log Out</button>
        </div>
    </div>
   
    <div className="article">

        <div>
            <input type="text" placeholder="Shop by Concern" />
            <br /><br />
            <input type="text" placeholder="Shop by Category" />
            <br /><br />
            <input type="text" placeholder="--Sort--" />
            <br /><br />
            <input type="text" placeholder="Shop All" />
        </div>




        <div className="image">
            <div>

                <img src="data:image/jpeg;base64,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"
                    alt="hsh" style={{height:"67%", width:"95%"}} />

                <h5>Iphone 14 pro</h5>
                <p>Rs:79,000/-</p>
                <p>Free Delivery</p>
            </div>

            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh77oT43_C1ntVc3jqxaPJukWxuZKR55csLQ&s"
                    alt="sjh" style={{height:"67%", width:"95%"}} />
                <h5>Redmi 12 Pro</h5>
                <p>Rs:30,000/-</p>
                <p>Free Delivery</p>
            </div>

            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIPGTM92ndJmcQr-6GyIikyG8lGY27KNhLFA&s"
                    alt="ghgh" style={{height:"67%", width: "90%" }} />
                <h5>Oppo f27 pro</h5>
                <p>Rs:36,000/-</p>
                <p>Free Delivery</p>
            </div>

            <div>
                <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSzX0RldPAglhraFPZnN8Yu_XBYmWfxxiNfH5N9fvBiN6efe4PiqL4S3jPWI9Dsjs2rjRBvfDZt6aTRQVMbjKjA30D7A5La8_XPBshjuPcGpDl4Z9TaSYUAqOqZ-reIqhmW_1UuKczBrIg&usqp=CAc"
                    alt="ghgh" style={{height:"67%", width: "110%" }} />
                <h5>One Plus 12</h5>
                <p>Rs:66,000/-</p>
                <p>Free Delivery</p>
            </div>

        </div>
    </div>
    

    <div className="footer">
     
        <div>
            <h5>Logo</h5>
            <p>Sub-Line</p>
        </div>
        <div>
            <h5>Paged</h5>
            <p>About us</p>
            <p>Our Expertise</p>
            <p>Testimonials</p>
            <p>Skin & Hair</p>
            <p>Shop</p>
        </div>
        <div>
            <h5>Legal & Help</h5>
            <p>FAQ'S</p>
            <p>Terms of Use</p>
            <p>Privacy & Policy</p>
        </div>
        <div>
            <h5>Contact-Us</h5>
            <p><span className="fa fa-globe"></span>Address</p>
            <p><span className="fa fa-phone"></span>Phone</p>
            <p><span className="fa fa-envelope"></span>Mail-Id</p>
        </div>
        <div className="links">
            <h5>Social-Links</h5>
            <span className="fa fa-facebook"></span>
            <br/>
            <span className="fa fa-instagram"></span>
            <br/>
            <span className="fa fa-twitter"></span>
            <br/>
            <span className="fa fa-youtube"></span>
        </div>
        <div>
           
            <h6><i><img src="data:image/jpeg;base64,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" alt="hdkj" style={{width:"20px"}}/> Google Play</i></h6>

            <h6><i><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAzFBMVEUAAAD///9DQ0P7/PvKzMnZ3d6tsKzz9PKLjYrX2db4+fh7fnrm5+Wkp6PHycYVGRTR09Cvs7UOEA1KTUqQk4+4ureqrKoeIR03OjYcHhwYGRducGycn5t1eHQ8PjuRkpAoKyZXWlcHDgNiZWAuMC1RUlASFhBYVk/i4d63trFkYl0sKiQXFQseHBZ1cmzt6+c5MiwXDQB/eXhoYGEfGBgVDQ6hm5tWUlJEPz+PiYmDf36ppqkiHyM5Njl4dHjHxMcdIyUTGBo0PD9DS00mZxnlAAAEiUlEQVR4nO3c21raQBQF4IwBE0KEpArSAirVWmw9tNV6rDXa93+nCjF8CTOgldnsbbr+67nYi2SOJHEcAAAAAAAAAAAAAAAAAAAAAAAAAPifvFvfaLW5i6CzWa8ESqngHXchRDqrnkq95y6FRLOlJja5i6HgK1XqhJ1aPqD7gbse67pBPqA64a7Hug1VVOMuyLbeVEDV4q7IMi2g6nOXZFddC6i2uGuyal0PWLJuGOoJt7lrsmpND+jucBdlU0cPWLKRtGJI2OEuyqZB6S9hw5CwyV2UTVuGgD53UVbpqxkVcddk11AL6O1x12TVjn4JB9w12dXXAna5S7JsdTpgyfYU2lwRlO0KOk7hbEYNy7VnGitsK9a4q6GQSxi9/cVos6mf1EdP8dzG9CSxv9n8uJy6bNjs9irD8OQkDGstvxBlPNJ4kZ+/flv9cWvPC4e1tf5buLJ+rXgU6lX8ydXZ7fndlfxfFIN26BZau8MN2cffnZYyierGxm3P2LqyvuyyX2zPnG+ssVv8e2nHr81uHAnN2HNn15zerp/SO3D/kx/Nb6tWBW4aV/R9gyHl43BSC80351TLXe5A0wzHvAvqcUcq0tbUFlS4Q+WZjl8WV5MzcZiOCG0I97mTPaG5giND7mipA7KAQs6ppv/PtWuVO575FNuexgp3PuOfZdaIOOag7IQiZovPhAFl/GPzksXoKx1wZxs7pgvY4M6WmrPHW5CQuZ6uFwZfubOl6AbSY+5oqcOXbGVfRUgndL5QBVRC7lG6m1TGROEQLtgOuZM9OaIKKKUX0k33X7iTZdpEAb0j7mQZqsMLOWdsJ0QJ5TyLSRRQTjekSuhecgfLfCVKKGeguSRKKOftkhWihCF3sAkkfK3y36WelHU3WcJAzMNgpiearRAz43+jSnjNnSzznSqhmO0h2bpUznRBdtIm5nmh6PlaX0fMFxbIjto87mSZc6qE6gd3tCenZAmljDVnZAnFTIlkg6nyfnJnS1E9CqXEnOvTDTVSBpsLwoQyzqPO6DriY1c84443QraqGQklRLyiTKg8ATcq1TY/85s7IOkDQ2MH7PMi5Xwx5nGvbqjOvXNC5pmR+jYdcS84E9KOpinm7eISEp7zJpzzMpctvAGXMNbcMCekXbmN/OJOSHeWkYq5AzpOlTSge8udz3F+kyYUcAlpL2LA3gtHKHsi81yYobuIUk6/6ebEU+5omZgo4B13sAmiIykZw0zqmiThFXesPIq1m4j3RyduCRIKWM3k2f/igLivZNm+T+U8kZFJguer/gfePXcg3a7VhCK/xXdjMaCcp9kL7P1jKuMVYANbL0JVuYPMlNhZvYUCR5nMg40B1Uu4Y8zzsPhVDBPuEPPtze6LbhjF2/617/fi6uwfoppwR3iWeUR17+r5j3jcD3rmkwE5W8I5tg133naitxvc6Q3fyIehk6n39qqzPlGSTB0O3CXLLHMhD/Gko3nxn3kt/WowafiwrPLsGNTX4rjXnxtvbK/rt+P2tciFKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQBn9BcakTE8Z0+SZAAAAAElFTkSuQmCC" alt="vshh" style={{width:"20px"}}/> App Store</i></h6> 
        </div>
    </div>
</div>
)
}
export default Project;