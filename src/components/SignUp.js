import React from 'react'

export default function SignUp(props) {
  return (
    <section class="content">
      <div class="container">
        <div class="login-container">
          <div class="panel">
            <div class="panel-heading">
              <strong>Mulai berbagi resep kesukaan</strong>
            </div>
            <div class="panel-body">
              <form action="#">
                <div class="form-group">
                  <input type="text" class="full" placeholder="Nama" />
                </div>
                <div class="form-group">
                  <input type="text" class="full" placeholder="Email" />
                </div>
                <div class="form-group">
                  <input type="password" class="full" placeholder="Password" />
                </div>
                <div class="form-group">
                  <input type="password" class="full" placeholder="Konfirmasi Password" />
                </div>
                <div class="form-group">
                  <input type="submit" class="btn btn-action" value="Daftar" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
