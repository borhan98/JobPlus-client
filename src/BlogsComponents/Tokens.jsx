const Tokens = () => {
  return (
    <div className="space-y-6 text-zinc-600">
      <h2 className="text-3xl font-bold border-l px-2 py-4 bg-base-200 rounded">
        What is an access token and refresh token? How do they work and where
        should we store them on the client-side?
      </h2>
      {/* Access token */}
      <div>
        <h3 className={"text-2xl font-medium mb-4"}>Access token</h3>
        <div className="space-y-4">
          <p>
            Access token is an encoded data about an user to secure the user
            data and some process. Access token is used for token-based
            authentication to create an application more secure. If implement
            token based authentication to an application, it will be more
            secured.
          </p>
          <p>
            An access token is created by the login system when an user logs in
            to the system. When an user successfully logs in to an applicaition,
            the application create an access token for the specific user. Then
            passes the token as credential when the target API called.
          </p>
        </div>
      </div>
      {/* Refresh token */}
      <div>
        <h3 className={"text-2xl font-medium mb-4"}>Refresh token</h3>
        <p>
          Refresh token is a token which create a new access token for user.
          typically, access token has an expiration date and it will expire
          after the date is over. Once it expire, the user need to login again
          to get a new access token. In this case, refresh token creates a new
          access token to skip the login step after expire the access token.
        </p>
      </div>
      {/* Keep them safe */}
      <div>
        <h3 className={"text-2xl font-medium mb-4"}>
          Keep the tokens in safe zone
        </h3>
        <p>
          You can store tokens inside the browser local storage or any variable
          in the client side. But it&#39;s too risky, the security level is too
          low. To keep them secure, you should always store them inside httpOnly
          cookie. If you store the tokens in the browser local storage, it can
          access all your user&#39;s token when an attacker will attack using
          Cross-Site Scripting (XSS) attacks. That&#39;s why keep them inside
          httpOnly cookie.
        </p>
      </div>
    </div>
  );
};

export default Tokens;
