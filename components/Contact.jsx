import React from 'react'
import Link from "next/link"

const Contact = () => {
  return (
    <div>
        <section className="mb-4">


 {/* <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>  */}

<p className="text-center w-responsive mx-auto mb-5">¿Tienes alguna pregunta? Por favor, no dudes en contactarme directamente. Te responderé lo antes posible para ayudarte.</p>

<div className="row">

    
    <div className="col-md-12 mb-md-0 mb-5">
        <form id="contact-form" name="contact-form" action="mail.php" method="POST">

           
            <div className="row">

                
                <div className="col-md-6">
                    <div className="md-form mb-0">
                        <label for="name" className="">Nombre:</label>
                        <input type="text" id="name" name="name" className="form-control"/>
                        
                    </div>
                </div>
           
                
                <div className="col-md-6">
                    <div className="md-form mb-0">
                        <label for="email" className="">E-mail:</label>
                        <input type="text" id="email" name="email" className="form-control"/>
                        
                    </div>
                </div>
              

            </div>
   

           
            <div className="row">
                <div className="col-md-12">
                    <div className="md-form mb-0">
                        <label for="subject" className="">Asunto:</label>
                        <input type="text" id="subject" name="subject" className="form-control"/>
                        
                    </div>
                </div>
            </div>
      

            
            <div className="row">

               
                <div className="col-md-12">

                    <div className="md-form">
                        <label for="message">Mensaje:</label>
                        <textarea type="text" id="message" name="message" rows="3" className="form-control md-textarea"></textarea>
                        
                    </div>

                </div>
            </div>
          

        </form>
        <hr className="mt-5 mb-5"></hr>

        <div className="col-md-12 text-center">
        <ul className="list-unstyled mb-0">
            <li><i className="fas fa-map-marker-alt fa-2x"></i>
                <p>Madrid, España  </p>
            </li>

            <li><i className="fas fa-phone mt-4 fa-2x"></i>
                <p>Link a Etsy: <Link href="https://www.etsy.com/shop/estiestamacrame">etsy.com/shop/EstiestaMacrame</Link></p>
                

            </li>

            <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                <p>contact@correo.com</p>
            </li>
        </ul>
    </div>


        <div className="text-center text-md-left">
            <a className="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Enviar</a>
        </div>
        <div className="status"></div>
    </div>
   

   
  

</div>

</section>


    </div>
  )
}

export default Contact