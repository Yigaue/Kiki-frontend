<template>
    <!-- Footer -->
<!-- Footer -->

<footer class="page-footer font-small mdb-color pt-4">

  <!-- Footer Links -->
  <div class="container text-center text-md-left">

    <!-- Footer links -->
    <div class="row text-center text-md-left mt-3 pb-3">

      <!-- Grid column -->
      <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
        <h6 class="text-uppercase mb-4 font-weight-bold">About</h6>
        <p>Kiki brings the best stories from around the planet.
            Get started here, and join the millions of users. 
            Write your own story and share with the world.
        </p>
      </div>
      <!-- Grid column -->

      <!-- Grid column -->
      <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
        <h6 class="text-uppercase mb-4 font-weight-bold">Quick links</h6>
        <p><router-link to="/stories">stories</router-link></p>
        <p><router-link to="/createstory">Create a story</router-link></p>
        <p><router-link to="/login">Sign in</router-link></p>
        <p><router-link to="/register">Register</router-link></p>
        <p><router-link to="/faq">FAQ</router-link></p>
      </div>

      <!-- Grid column -->
      <hr class="w-100 clearfix d-md-none">
      <!-- Grid column -->
      <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
        <h6 class="text-uppercase mb-4 font-weight-bold">Contact</h6>
        <p><i class="fas fa-home mr-3"></i> Kiki International</p>
        <p><i class="fas fa-envelope mr-3"></i> info@kikigmail.com</p>
        <p><i class="fas fa-phone mr-3"></i> +070 xxx xxxx xxx</p>
      </div>
      <!-- Grid column -->

    </div>
    <!-- Footer links -->
    <hr>

    <!-- Grid row -->
    <div class="row d-flex align-items-center">

      <!-- Grid column -->
      <div class="col-md-7 col-lg-8">

        <!--Copyright-->
        <p class="text-center text-md-left"> &copy;
          <router-link to="/">
            <strong>2020</strong>
          </router-link>
        </p>

      </div>
      <!-- Grid column -->

      <!-- Grid column -->
      <div class="col-md-5 col-lg-4 ml-lg-0">

        <!-- Social buttons -->
        <div class="text-center text-md-right">
          <ul class="list-unstyled list-inline">
            <li class="list-inline-item">
              <a class="btn-floating btn-sm rgba-white-slight mx-1">
                <i class="fab fa-facebook-f"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a class="btn-floating btn-sm rgba-white-slight mx-1">
                <i class="fab fa-twitter"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a class="btn-floating btn-sm rgba-white-slight mx-1">
                <i class="fab fa-google-plus-g"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a class="btn-floating btn-sm rgba-white-slight mx-1">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
        </div>

      </div>
      <!-- Grid column -->

    </div>
    <!-- Grid row -->

  </div>
  <!-- Footer Links -->

</footer>
<!-- Footer -->
</template>

<script>
export default {
    name: 'Footer',
    data (){
        return{
            copyright: 'Kiki 2019',
        }
    }
}
</script>
<style scoped>

footer{
   background: rgb(146, 116, 116);
    color: #fff;
    width: 100%;
    height: 50%;
    bottom: 0%;
    margin-top: 200px;
}
a {
    color: #fff;
}
h6{
    color:rgba(202, 247, 232, 0.94);
}
</style>