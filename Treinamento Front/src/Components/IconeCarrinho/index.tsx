import React from "react";
import Paper from "@mui/material/Paper";
import { borderRadius } from "@mui/system";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import AddShoppingCartTwoToneIcon from "@mui/icons-material/AddShoppingCartTwoTone";

const IconeCarrinho = () => {
  return (
    <Box className="box">
      <Paper className="paper">
        <Box className="boxDentro">
          <Box className="boxImagem">
            <img
              id="imagem"
              style={{ width: "50px", height: "50px", borderRadius: "50%" }}
              src="http://d3ugyf2ht6aenh.cloudfront.net/stores/001/249/553/products/camisa-palmeiras-ii-2021-versao-jogador1-7ac81105f656241b1e16319017185827-640-0.jpg"
              alt="Camiseta do Palmeiras 2021"
            />
          </Box>
          <Box className="boxTitulo">
            <Typography
              className="titulo"
              variant="h6"
              component="div"
              gutterBottom
            >
              Titulo
            </Typography>
            <Typography
              className="preco"
              variant="body1"
              component="div"
              gutterBottom
            >
              Preço
            </Typography>
          </Box>
        </Box>
        <Box className="botao">
          <Button variant="outlined" startIcon={<AddShoppingCartTwoToneIcon />}>
            Adicionar <br /> no carrinho
          </Button>
        </Box>
      </Paper>
      <Paper className="paper">
        <Box className="boxDentro">
          <Box className="boxImagem">
            <img
              id="imagem"
              style={{ width: "50px", height: "50px", borderRadius: "50%" }}
              src="http://d3ugyf2ht6aenh.cloudfront.net/stores/001/249/553/products/camisa-palmeiras-ii-2021-versao-jogador1-7ac81105f656241b1e16319017185827-640-0.jpg"
              alt="Camiseta do Palmeiras 2021"
            />
          </Box>
          <Box className="boxTitulo">
            <Typography
              className="titulo"
              variant="h6"
              component="div"
              gutterBottom
            >
              Titulo
            </Typography>
            <Typography
              className="preco"
              variant="body1"
              component="div"
              gutterBottom
            >
              Preço
            </Typography>
          </Box>
        </Box>
        <Box className="botao">
          <Button variant="outlined" startIcon={<AddShoppingCartTwoToneIcon />}>
            Adicionar <br /> no carrinho
          </Button>
        </Box>
      </Paper>
      <Paper className="paper">
        <Box className="boxDentro">
          <Box className="boxImagem">
            <img
              id="imagem"
              style={{ width: "50px", height: "50px", borderRadius: "50%" }}
              src="http://d3ugyf2ht6aenh.cloudfront.net/stores/001/249/553/products/camisa-palmeiras-ii-2021-versao-jogador1-7ac81105f656241b1e16319017185827-640-0.jpg"
              alt="Camiseta do Palmeiras 2021"
            />
          </Box>
          <Box className="boxTitulo">
            <Typography
              className="titulo"
              variant="h6"
              component="div"
              gutterBottom
            >
              Titulo
            </Typography>
            <Typography
              className="preco"
              variant="body1"
              component="div"
              gutterBottom
            >
              Preço
            </Typography>
          </Box>
        </Box>
        <Box className="botao">
          <Button variant="outlined" startIcon={<AddShoppingCartTwoToneIcon />}>
            Adicionar <br /> no carrinho
          </Button>
        </Box>
      </Paper>
      <Paper className="paper">
        <Box className="boxDentro">
          <Box className="boxImagem">
            <img
              id="imagem"
              style={{ width: "50px", height: "50px", borderRadius: "50%" }}
              src="http://d3ugyf2ht6aenh.cloudfront.net/stores/001/249/553/products/camisa-palmeiras-ii-2021-versao-jogador1-7ac81105f656241b1e16319017185827-640-0.jpg"
              alt="Camiseta do Palmeiras 2021"
            />
          </Box>
          <Box className="boxTitulo">
            <Typography
              className="titulo"
              variant="h6"
              component="div"
              gutterBottom
            >
              Titulo
            </Typography>
            <Typography
              className="preco"
              variant="body1"
              component="div"
              gutterBottom
            >
              Preço
            </Typography>
          </Box>
        </Box>
        <Box className="botao">
          <Button variant="outlined" startIcon={<AddShoppingCartTwoToneIcon />}>
            Adicionar <br /> no carrinho
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default IconeCarrinho;
