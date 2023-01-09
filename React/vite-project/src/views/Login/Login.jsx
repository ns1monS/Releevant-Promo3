export default function Login() {
  return (
    <div>
    <div class="container justify-content-center ">
    <div >
      <div class="py-5 text-lg-center">
        <h2>Registrate</h2>
      </div>
        </div>
        <div class="d-flex" >
          <form class="needs-validation justify-content-center" novalidate/>
            <div class="row g-3 d-flex justify-content-center" >
              <div class="col-sm-6">
                <label for="firstName" class="form-label">First name</label>
                <div type="text" class="form-control" id="firstName" placeholder="" value="" required>
                <div class="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>
    
              <div class="col-sm-6">
                <label for="lastName" class="form-label">Last name</label>
                <input type="text" class="form-control" id="lastName" placeholder="" value="" required/>
                <div class="invalid-feedback">
                  Valid last name is required.
                </div>
              </div>
              <div class="col-sm-6">
                <label for="telefono" class="form-label">telefono</label>
                <input type="text" class="form-control" id="telefono" placeholder="" value="" required/>
                <div class="invalid-feedback">
                  Valid last name is required.
                </div>
              </div>
    
              <div class="col-12">
                <label for="email" class="form-label">email</label>
                <div class="input-group has-validation">
                  <span class="input-group-text">@</span>
                  <input type="text" class="form-control" id="email" placeholder="email" required/>
                <div class="invalid-feedback">
                    Your email is required.
                  </div>
                </div>
              </div>
              </div>
              <div class="col-12">
                <label for="password" class="form-label">password</label>
                <input type="password" class="form-control" id="password" placeholder="write a password" required/>
                <div class="invalid-feedback">
                  Please enter your shipping address.
                </div>
              </div>
    
            <hr class="my-4"/>
    
            <div class="form-check">
              <input type="checkbox" class="form-check-input" id="same-address"/>
              <label class="form-check-label" for="same-address">Shipping address is the same as my billing address</label>
            </div>
    
            <div class="form-check">
              <input type="checkbox" class="form-check-input" id="save-info"/>
              <label class="form-check-label" for="save-info">Save this information for next time</label>
            </div>
    
            <hr class="my-4"/>
            <div class="my-3">
        </div>
      </div>
    </div>
      <button class="w-100 btn btn-primary btn-lg" type="button" onclick="registroUsuario()">Continue to checkout</button>
      <a href="index.html">Inicio</a>
    
    </div>
    
    <footer class="my-5 pt-5 text-muted text-center text-small">
      <p class="mb-1">&copy; 2017–2022 Company Name</p>
      <ul class="list-inline">
        <li class="list-inline-item"><a href="#">Privacy</a></li>
        <li class="list-inline-item"><a href="#">Terms</a></li>
        <li class="list-inline-item"><a href="#">Support</a></li>
      </ul>
    </footer>
    </div>
  );
}
