import styled from "styled-components";

export const Styles = styled.div`
    h1 {
        text-align: center;
        color: #777
    }

    h3 {
        text-align: center;
        color: #777
    }

    p {
        text-align: center;
    }

    form {
        display: flex;
        flex-direction: column;
        width: 25%;
        margin: 100px auto;

        label {
            margin-top: 20px;
        }

        input, select {
            font-size: 1.2em;
        }

        .error {
            text-color: red;
            font-size: .6em;
        }
    }

    button {
        background: #50104a;
        padding 10px;
        color: white;
        margin-top: 20px;
        border-radius: 5px;
        font-size: 1.2em;
    }

    img {
        width: 25%;
        height: 25%;
        padding-top: 10px;
        align-self: center;
    }
`;
