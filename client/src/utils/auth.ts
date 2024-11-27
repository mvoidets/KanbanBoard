import { JwtPayload, jwtDecode } from 'jwt-decode';

class AuthService {
  getProfile():string {
     const profile = this.getProfile();
    return profile;
  }

  loggedIn(): string {
    const idToken = this.getToken();
    return idToken;
  }
  
  isTokenExpired(token: string): boolean {
    const decodedToken: JwtPayload = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    return decodedToken.exp ? decodedToken.exp < currentTime : true;
  }

  getToken(): string {
    const loggedUser = localStorage.getItem('id_token') || '';
    return loggedUser;
  }

  

  login(idToken: string) {
    localStorage.setItem('id_token', idToken);
    window.location.assign('/');
  }

  logout() {
    localStorage.removeItem('id_token');
    window.location.assign('/');
  }
}

export default new AuthService();
