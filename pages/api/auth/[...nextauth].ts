import NextAuth, { type NextAuthOptions, type Session, type User } from "next-auth";
import DiscordProvider from "next-auth/providers/discord";

// Extend JWT and Session types
declare module "next-auth" {
  interface Session {
      accessToken?: string;
          user?: User;
            }

              interface User {
                  accessToken?: string;
                    }
                    }

                    declare module "next-auth/jwt" {
                      interface JWT {
                          accessToken?: string;
                            }
                            }

                            export const authOptions: NextAuthOptions = {
                              providers: [
                                  DiscordProvider({
                                        clientId: process.env.DISCORD_CLIENT_ID!,
                                              clientSecret: process.env.DISCORD_CLIENT_SECRET!,
                                                  }),
                                                    ],

                                                      secret: process.env.NEXTAUTH_SECRET,

                                                        session: {
                                                            strategy: "jwt",
                                                                maxAge: 30 * 24 * 60 * 60, // 30 days
                                                                  },

                                                                    callbacks: {
                                                                        async jwt({ token, account }) {
                                                                              if (account?.access_token) {
                                                                                      token.accessToken = account.access_token;
                                                                                            }
                                                                                                  return token;
                                                                                                      },

                                                                                                          async session({ session, token }) {
                                                                                                                session.accessToken = token.accessToken;
                                                                                                                      return session;
                                                                                                                          },
                                                                                                                            },
                                                                                                                            };

                                                                                                                            export default NextAuth(authOptions);