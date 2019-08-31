import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    username: string
    password: string

    constructor(public afAuth: AngularFireAuth,
        public router: Router) { }

    ngOnInit() {
    }

    async login() {
        const { username, password } = this
        try {
            //to do 
            const res = await this.afAuth.auth.signInWithEmailAndPassword(username + '@tofi.com', password)
            this.router.navigate(["/tabs"])
        } catch(err) {
            console.dir(err)
            if(err.code === "auth/operation-not-allowed"){
                console.log("The given sign-in provider is disabled for this Firebase project")
            }
            if(err.code === "auth/user-not-found"){
                console.log("User not found")
            }
        }
    }

    goToRegistration() {
        this.router.navigate(["/register"])
    }

}
