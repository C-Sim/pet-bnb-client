import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";

import { ImageWithBackground } from "../components/ImageWithBackground";
import { LoginForm } from "../components/LoginForm";

export const LoginPage = () => {
  const isMobile = useMediaQuery("(max-width:900px)");

  return (
    <Grid container sx={{ minHeight: "95vh" }}>
      {!isMobile && (
        <Grid item md={6}>
          <ImageWithBackground imageUrl="https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" />
        </Grid>
      )}
      <Grid
        item
        xs={12}
        sm={12}
        md={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: `linear-gradient(
            to top,
            rgba(20, 20, 20, 0.2),
            rgba(133, 133, 133, 0.2)
          )`,
        }}
      >
        <LoginForm isMobile={isMobile} />
      </Grid>
    </Grid>
  );
};
