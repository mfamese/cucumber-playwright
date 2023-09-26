import * as dotenv from 'dotenv';

export const getEnv = () => {

    dotenv.config({
        override:true,
        path:`support/helpers/env/.env.${process.env.ENV}`
    })
}