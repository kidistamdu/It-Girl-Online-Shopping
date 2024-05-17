import { Injectable, inject } from '@angular/core'
import {
  Auth,
  GoogleAuthProvider,
  authState,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithRedirect,
  signOut,
} from '@angular/fire/auth'


@Injectable({ providedIn: 'root' })
export class AuthService {
  private auth: Auth = inject(Auth)
  public authState = authState(this.auth)



  async googleSignIn() {
   console.log('Logging in with Google')
    const provider = new GoogleAuthProvider()
    const credential = await signInWithRedirect(this.auth, provider)
    console.log(credential)
    return credential
  }

  async emailPasswordLogIn(request: { email: string; password: string }) {
    console.log('Logging in with email & password')
    const credential = await signInWithEmailAndPassword(this.auth, request.email, request.password)
    console.log(credential)
    return credential
  }

  async emailPasswordRegister(request: { email: string; password: string }) {
    console.log('Register email & password')
    const credential = await createUserWithEmailAndPassword(this.auth, request.email, request.password)
    console.log(credential)
    return credential
  }

  async emailLogin(email: string) {
    console.log('Logging in with email')
    // signInWithEmailLink()
  }

  async signOut(redirectUrl = '/auth/log-in') {
    console.log('Logging out')
    await signOut(this.auth)
    if (redirectUrl) location.replace(redirectUrl)
        console.log('Sign out complete')
  }
}
