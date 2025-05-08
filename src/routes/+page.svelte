<script>
  import Logo from '../lib/assets/Logo.png'
</script>

<style>
  @keyframes gradientMove {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  .animated-gradient {
    background: linear-gradient(-45deg, #0a0f2c, #101d5b, #1c2c7a, #0a0f2c);
    background-size: 400% 400%;
    animation: gradientMove 12s ease infinite;
  }

  @keyframes popUp {
    0% {
      transform: scale(0.9) translateY(30px);
      opacity: 0;
    }
    100% {
      transform: scale(1) translateY(0);
      opacity: 1;
    }
  }

  .pop-up {
    animation: popUp 1.5s ease-out forwards;
  }
</style>

<!-- Page wrapper -->
 <div class="w-full bg-gradient-to-r from-white via-blue-300 to-white animated-gradient">
  <div class="min-h-screen w-full  mx-auto flex flex-col justify-between text-white font-sans animated-gradient">

    <!-- Header -->
    <header class="w-full px-4 sm:px-6 py-4 flex items-center justify-between">
      <img alt="logo" class="h-5.5" src={Logo} />
    </header>
  
    <!-- Main Content -->
    <main class="flex-1 flex items-center justify-center text-center px-4  max-w-[1400px] m-auto">
      <h1 class="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-wide pop-up drop-shadow-[0_4px_15px_rgba(0,0,0,0.8)] leading-tight">
        <span class="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-300 to-white">
          COMING SOON
        </span>
      </h1>
    </main>
  
    <!-- Footer -->
    <footer class="px-4 sm:px-6 py-6 text-xs sm:text-sm text-gray-300 text-center border-t border-white/10">
      <div class="space-y-3">
        <p>© 2025 Apryl – Made with ❤️ in India – <a href="mailto:apryl.xyz@gmail.com" class="underline">apryl.xyz@gmail.com</a></p>
        <div class="flex flex-wrap justify-center gap-x-3 gap-y-2 text-gray-400 text-xs sm:text-sm">
          <!-- <a href="#" class="hover:text-white">About</a> -->
          <!-- <a href="#" class="hover:text-white">Features</a> -->
          <!-- <a href="#" class="hover:text-white">Contact</a> -->
          <!-- <a href="#" class="hover:text-white">Careers</a> -->
          <!-- <a href="#" class="hover:text-white">Privacy</a> -->
        </div>
      </div>
    </footer>
  </div>
 </div>

