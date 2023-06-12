import React, { useState, useContext } from "react";

import { Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, AuthContext } from "../context/auth";
import  Login  from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import Dashboard from "../pages/Dashboard";

const RoutesFunction = () => {
    const Private = ({ children, permission }) => {
        const { authenticated, loading, user} = useContext(AuthContext);
        if (loading) {
            return <div>Carregando...</div>;
        }

        if (!authenticated) {
            return <Navigate to="/" />;
        }
        if (permission && permission.find(p => p == user?.tipo ) == undefined)  {
            return <Navigate to="/" />;
        }
        return children;
    };

    return (
        <AuthProvider>
            <Routes>
                
                <Route path="/" element={<Login/>} />
                <Route path="/cadastro" element={<Cadastro/>} />
                <Route
                    path="/dashboard"
                    element={
                        <Private >
                            <Dashboard />
                        </Private>
                    }
                />
                
               {/*
                <Route
                    path="/dashboard"
                    element={
                        <Private permission={[1,2,3]}>
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
