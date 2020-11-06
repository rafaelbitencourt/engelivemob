import React, { useState } from 'react';

import { useForm } from "react-hook-form";

import AuthService from '../../services/auth.service';

import {
    TextField,
    Button,
    Paper,
    Typography,
    Grid
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        },
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
    },
    erro: {
        color: 'red'
    },
}));

export default ({ navigation }) => {

    const classes = useStyles();

    const [mensagemErro, setMensagemErro] = useState("");

    const { register, errors, handleSubmit, reset } = useForm({});

    const cbSubmit = (inputs) => {
        AuthService.login(inputs.usuario, inputs.senha)
            .then(
                () => {
                    setMensagemErro("");
                    reset();
                    navigation.navigate('Main');
                },
                (error) => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();

                    setMensagemErro(resMessage);
                }
            );
    };

    return (
        <form
            className={classes.layout}
            onSubmit={handleSubmit(cbSubmit)}
            autoComplete="off">

            <Paper className={classes.paper}>
                <Typography component="h1" variant="h4" align="center">
                    Login
                    </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField
                            label="Usuário"
                            name="usuario"
                            fullWidth
                            error={errors.usuario ? true : false}
                            helperText={errors.usuario ? errors.usuario.message : null}
                            inputRef={register({
                                required: "Campo obrigatório"
                            })}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Senha"
                            name="senha"
                            type="password"
                            fullWidth
                            error={errors.senha ? true : false}
                            helperText={errors.senha ? errors.senha.message : null}
                            inputRef={register({
                                required: "Campo obrigatório"
                            })}
                        />
                    </Grid>
                </Grid>
                <Typography component="h6" variant="h6" align="center" className={classes.erro}>
                    {mensagemErro}
                </Typography>
                <div className={classes.buttons}>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className={classes.button}
                    >Login</Button>
                </div>
            </Paper>
        </form>
    );
}