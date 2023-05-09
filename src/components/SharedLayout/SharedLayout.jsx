import { Outlet } from "react-router-dom";
import { NavContainer,Header, NavList, NavListItem, StyledLink } from "./SharedLayout.styled";
import { Suspense } from "react";
import { Hearts } from "react-loader-spinner";

export const SharedLayout = () => {
    return (
        <div>
            <Header>
                <NavContainer>
                    <nav>
                        <NavList>
                            <NavListItem>
                                <StyledLink to="/">Home</StyledLink>
                            </NavListItem>
                            <NavListItem>
                                <StyledLink to="/tweets">Tweets</StyledLink>
                            </NavListItem>
                        </NavList>
                    </nav>
                </NavContainer>         
            </Header>
            <main>
                <Suspense fallback={<Hearts 
                    height="80"
                    width="80"
                    color="#4fa94d"
                    ariaLabel="hearts-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    />}>
                    <Outlet />
                </Suspense>
            </main>
            <footer></footer>
        </div>
    )
}