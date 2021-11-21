class Profile {
  constructor() {
    this.clientId = "";
    this.clientSecret = "";
  }

  async getProfile(username) {
    const profileResponse = await fetch(
      `https://jsonplaceholder.typicode.com/users?username=${username}`
    );

    const profileData = await profileResponse.json();

    return {
      profileData,
    };
  }
}
