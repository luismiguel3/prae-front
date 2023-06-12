import React, { useState, useContext } from "react";

import { Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, AuthContext } from "../context/auth";
import  Login  from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import Dashboard from "../pages/Dashboard";

const RoutesFunction = () => {
    const Private = ({ children, permission }) => {
        const { authenticated, loading } = useContext(AuthContext);
        console.log("eae")
        if (loading) {
            return <div>Carregando...</div>;
        }

        // se tiver autenticado e tiver permissão retorna o children
        // se não tiver autenticado redireciona para o login
        
        
        //return authenticated ? children : <Navigate to="/" />;
    };

    return (
        <AuthProvider>
            <Routes>
                
                <Route path="/" element={<Login/>} />
                <Route path="/cadastro" element={<Cadastro/>} />
                <Route path="/dashboard" element={<Dashboard/>} />
               {/*
                <Route
                    path="/dashboard"
                    element={
                        <Private permission={"admin"}>
                            <Dashboard />
                        </Private>
                    }
                />
                
                <Route
                    path="/questions"
                    element={
                        <Private>
                            <Questions />
                        </Private>
                    }
                />

                <Route
                    path="/users"
                    element={
                        <Private>
                            <Users />
                        </Private>
                    }
                />

                <Route
                    path="/quiz"
                    element={
                        <Private>
                            <Quiz />
                        </Private>
                    }
                />

                <Route
                    path="/filter"
                    element={
                        <Private>
                            <Filter />
                        </Private>
                    }
                />
                */}
            </Routes>
        </AuthProvider>
    );
};

export default RoutesFunction;
