<template>
    <v-container fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-12" outlined>
            <v-card-text class="text-center">
              <v-img
                src="https://firebasestorage.googleapis.com/v0/b/revue-64b0e.appspot.com/o/LaunchWellFavicon32.svg?alt=media&token=a36d5ad4-3c9d-4c38-8a46-cd35bc7b9f69"
                height="100"
                contain
                class="my-4"
              ></v-img>
              <h2>Sign in with Google</h2>
              <p class="subtitle-1 mb-5">Use your Google Account to sign in.</p>
              <v-btn large class="ma-3 pa-3 outlined flat" @click="googleLogin" max-width="100%">
                <v-img contain src="https://firebasestorage.googleapis.com/v0/b/revue-64b0e.appspot.com/o/Google__G__Logo.svg?alt=media&token=2bca4960-0f15-48b2-9f07-4ee5f9133b37"  class="mr-2"></v-img>
                <p class="ml-2 my-2 gsi">
                Sign in with Google
                </p>
              </v-btn>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </template>  
  <script>

// import firebase auth
// import firebase auth
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import app from '@/firebase';

  
  export default {
    methods: {
      googleLogin() {
        const auth = getAuth(app);
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          console.log("USER" + user)
          console.log("TOKERN" + token)
          // You can now do further handling here, like routing to another page or storing the user in a store
          document.write('Hello ${user.displayName}, welcome to LaunchWell!')
        }).catch((error) => {
          // Handle Errors here.
          console.error(error);
          // You can handle errors here, such as displaying a notification to the user
        });
    }
  }
};
  </script>
  <style>
.gsi {
  -webkit-flex-grow: 1;
  flex-grow: 1;
  font-family: 'Roboto', arial, sans-serif;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  vertical-align: top;
}
</style>