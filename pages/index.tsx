import Head from "next/head";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import MuiLink from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const styles = {
  container: {
    minHeight: "100vh",
    padding: "0 0.5rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  main: {
    padding: "4rem 0",
    flex: "1",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    margin: "0",
    lineHeight: "1.15",
    fontSize: "4rem",
    fontWeight: "bold",
    textAlign: "center",
    "& a": {
      color: "#0070f3",
      textDecoration: "none",
      "&:hover, &:focus, &:active": {
        textDecoration: "underline",
      },
    },
  },
  description: {
    lineHeight: "1.5",
    fontSize: "1.5rem",
    textAlign: "center",
  },
  code: {
    background: "#fafafa",
    borderRadius: "5px",
    padding: "0.75rem",
    fontSize: "1.1rem",
    fontFamily: [
      "Menlo",
      "Monaco",
      "Lucida Console",
      "Liberation Mono",
      "DejaVu Sans Mono",
      "Bitstream Vera Sans Mono",
      "Courier New",
      "monospace",
    ].join(","),
  },
  grid: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    maxWidth: "800px",
    marginTop: "3rem",
  },
  card: {
    display: "block",
    margin: "0.8rem",
    flexBasis: "45%",
    padding: "1rem",
    textAlign: "left",
    color: "inherit",
    textDecoration: "none",
    border: "1px solid #eaeaea",
    borderRadius: "10px",
    transition: "color 0.15s ease, border-color 0.15s ease",
    "& h3": {
      margin: "0 0 1rem 0",
      fontSize: "1.5rem",
      fontWeight: "bold",
    },
    "& p": {
      margin: "0",
      fontSize: "1.25rem",
      lineHeight: "1.5",
    },
    "&:hover, &:focus, &:active": {
      color: "#0070f3",
      borderColor: "#0070f3",
      textDecoration: "inherit",
    },
  },
  footer: {
    width: "100%",
    height: "100px",
    borderTop: "1px solid #eaeaea",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& img": {
      marginLeft: "0.5rem",
    },
    "& a": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  logo: {
    height: "1em",
  },
};

export default function Home() {
  return (
    <Container maxWidth={false} sx={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box sx={styles.main} component="main">
        <Typography component="h1" sx={styles.title}>
          Welcome to <MuiLink href="https://nextjs.org">Next.js!</MuiLink>
        </Typography>

        <Typography component="p" sx={styles.description}>
          Get started by editing <code style={styles.code}>pages/index.js</code>
        </Typography>

        <Grid sx={styles.grid} container spacing={0}>
          <Grid item xs={12} sm={6}>
            <MuiLink href="https://nextjs.org/docs" sx={styles.card}>
              <Typography component="h3">Documentation &rarr;</Typography>
              <Typography>
                Find in-depth information about Next.js features and API.
              </Typography>
            </MuiLink>
          </Grid>

          <Grid item xs={12} sm={6}>
            <MuiLink href="https://nextjs.org/learn" sx={styles.card}>
              <Typography component="h3">Learn &rarr;</Typography>
              <Typography>
                Learn about Next.js in an interactive course with quizzes!
              </Typography>
            </MuiLink>
          </Grid>

          <Grid item xs={12} sm={6}>
            <MuiLink
              href="https://github.com/vercel/next.js/tree/master/examples"
              sx={styles.card}
            >
              <Typography component="h3">Examples &rarr;</Typography>
              <Typography>
                Discover and deploy boilerplate example Next.js projects.
              </Typography>
            </MuiLink>
          </Grid>

          <Grid item xs={12} sm={6}>
            <MuiLink
              href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              sx={styles.card}
            >
              <Typography component="h3">Deploy &rarr;</Typography>
              <Typography>
                Instantly deploy your Next.js site to a public URL with Vercel.
              </Typography>
            </MuiLink>
          </Grid>

          <Grid item xs={12} sm={6}>
            <MuiLink
              href="https://nextjs.org/docs/basic-features/typescript"
              sx={styles.card}
            >
              <Typography component="h3">TypeScript &rarr;</Typography>
              <Typography>
                Add optional static typing to catch errors before running code.
              </Typography>
            </MuiLink>
          </Grid>

          <Grid item xs={12} sm={6}>
            <MuiLink
              href="https://mui.com/getting-started/installation/"
              sx={styles.card}
            >
              <Typography component="h3">Material-UI &rarr;</Typography>
              <Typography>
                React components for faster and easier web development.
              </Typography>
            </MuiLink>
          </Grid>
        </Grid>
      </Box>

      <Box component="footer" sx={styles.footer}>
        <MuiLink
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" style={styles.logo} />
        </MuiLink>
      </Box>
    </Container>
  );
}
