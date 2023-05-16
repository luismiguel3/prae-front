import React, { useState, useContext } from "react";

import { Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, AuthContext } from "../context/auth";
import  Login  from "../pages/Login";

const RoutesFunction = () => {
    const Private = ({ children }) => {
        const { authenticated, loading } = useContext(AuthContext);
        console.log("eae")
        if (loading) {
            return <div>Carregando...</div>;
        }
        console.log("eae")
        return authenticated ? children : <Navigate to="/" />;
    };

    return (
        <AuthProvider>
            <Routes>
                
                <Route path="/" element={<Login/>} />
               {/*
                <Route
                    path="/dashboard"
                    element={
                        <Private>
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
