import {Component, ViewChild, Renderer, ElementRef, OnInit} from 'angular2/core'
import {LoginService} from './login.service'
import {LoginComponent} from './login.component'

declare var google : any
declare var map : any

@Component({
    selector: 'site-users',
    templateUrl: 'site-users.html',
    providers: [LoginService, LoginComponent],

})
export class SiteUsers {
    @ViewChild('usersSection') usersSection:ElementRef
    constructor(private _logS:LoginService, private _logC:LoginComponent) {
        if(!localStorage.getItem('user'))
            window.location.href = '/login'
    }

    private users

    getUsers() {
        this._logS.getUsers().subscribe(res => {
            this.users = res
        })
    }

    // to call getUsers OnInit
    ngOnInit() {
        this.getUsers()
        let user = localStorage.getItem('user')
        console.log(user)

    }
    
    displayUsersOrNot() {
        if(this._logC.authServiceResponse != undefined)
            return 'block'
        return 'block'
    }
}