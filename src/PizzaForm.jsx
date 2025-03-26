import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Form, FormGroup, FormText, FormFeedback, Label, Input, Button, Col } from 'reactstrap';
import './PizzaForm.css';
import logo from "../images/iteration-1-images/logo.svg";
import styled from 'styled-components';


const malzemeListesi = ['pepperoni', 'domates', 'biber', 'sosis', 'misir', 'sucuk', 'jambon', 'ananas', 'jalapeno', 'kabak', 'sogan', 'sarimsak'];

const errorMessages = {
    boyut: '',
    hamur: '',
    malzemeler: 'Lütfen en az 4, en fazla 10 malzeme seçiniz.',
    isim: 'Lütfen isminizi tam olarak giriniz.',
    not: '',
    sayi: '',
};

const initialForm = {
    boyut: '',
    hamur: '',
    malzemeler: [],
    isim: '',
    not: '',
    sayi: 0,
};

const initialErrors = {
    boyut: true,
    hamur: false,
    malzemeler: true,
    isim: true,
    not: false,
    sayi: true,
};

const Header = styled.header`
    height: 12vh;
    width: 100%;
    background-color: #CE2829;
    display: flex;
    flex-direction: column;
    
    
    img {
    display: block;
    padding-top: 3vh;
    height: 3vh;
    width: auto;
    margin-left: auto;
    margin-right: auto;
    
    
    };
    p {
    margin-bottom: 1vh;
    margin-top: auto;
    margin-left: 36vw;
    padding-left: 0;
    color: #FAF7F2;
    font-family: FormFont;
    font-weight: 200;
    font-size: 0.6rem;
    };
`;



const DivMidWrapper = styled.div`
    font-family: FormFont;
    background-color: white;
    display: flex;
    flex-direction: column;
`;

const Section = styled.section`
    margin-left: 36vw;
    padding-left: 0;
    width: 30vw;
    display: flex;
    flex-direction: column;
    
    div.pizza-name {
    color: black;
    }
    div.pizza-specs {
    height: 4vh;
    display: flex;
    justify-content: space-between;
    }
    div.pizza-price {
    color: black;
    font-weight: 800;
    }
    div.pizza-comments {
    display: flex;
    justify-content: flex-end;
    gap: 50%;
    color: #5F5F5F;
    }
    div.pizza-explanation {
    color: #5F5F5F;
    font-weight: 100;
    margin-top: 0;
    }
`;

const DivFormWrapper = styled.div`
    margin-left: 36vw;
    padding-left: 0;
    width: 30vw;
`;

const DivBoyuthamur = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`;

const StyledForm = styled(Form)`

`;

const StyledFGBoyut = styled(FormGroup)`
    p {
    margin: 0;
    }
    label {
    color: #5F5F5F;
    }
    div {
    padding: 0.8rem;
    }
`;

const StyledFGHamur = styled(FormGroup)`

`;



const StyledFGMalzemeText = styled(FormGroup)`
    p:last-child {
    color: #5F5F5F;
}
`;

const StyledFGMalzemeCheckbox = styled(FormGroup)`
    height: 25vh;
    display: flex;
    flex-flow: row wrap;
    label {
    color: #292929;
    width: 10vw;
    height: auto;
    }
    div {
    min-width: 1vw;
    min-height: 2vh;
    }
`;

const StyledFGIsim = styled(FormGroup)`
    label {
    margin-right: 1rem;
    }

    div {
    min-width: 1vw;
    min-height: 3vh;
    }
`;

const StyledFGNotlar = styled(FormGroup)`
    label {
    display: block;
    margin-top: 0.5 rem;
    margin-bottom: 0.5rem;
    }
    textarea {
    padding: 1rem;
    }
`;

const StyledFGSayi = styled(FormGroup)`
    
    display: flex;
    p {
    width: 16px;
    height: 16px;
    margin: 0;
    padding: 15px;
    border: 1px solid #5F5F5F;
    text-align: center;
    
    }
    button {
    background-color: #FDC913;
    height: 3rem;
    width: 3rem;
    }
`;

const StyledFGOzet = styled(FormGroup)`

`;

const StyledFGButonsbmt = styled(FormGroup)`

`;



export default function PizzaForm() {
    const [formData, setFormData] = useState(initialForm);

    const [isValid, setIsValid] = useState(false);

    const [errors, setErrors] = useState(initialErrors);

    useEffect(() => {
        if (!errors.boyut && !errors.hamur && !errors.malzemeler && !errors.isim && !errors.sayi) {
            setIsValid(true);
        } else {
            setIsValid(false);
        }
    }, [formData]);

    const history = useHistory();

    function toTitleCase(str) {
        return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
    }

    const handleChange = (event) => {
        let { name, value, type, id } = event.target;
        if (type === "checkbox") {

            if (formData.malzemeler.includes(value)) {
                const val = formData.malzemeler.filter(x => x !== value);
                setFormData({ ...formData, malzemeler: val });
                if (val.length >= 4 && val.length <= 10) {
                    setErrors({ ...errors, malzemeler: false });
                } else {
                    setErrors({ ...errors, malzemeler: true });
                }
            } else {
                const val = [...formData.malzemeler, value];
                setFormData({ ...formData, malzemeler: val });
                if (val.length >= 4 && val.length <= 10) {
                    setErrors({ ...errors, malzemeler: false });
                } else {
                    setErrors({ ...errors, malzemeler: true });
                }
            }
        } else if (type === "button") {

            if (id === "decrease") {
                let val = formData.sayi;
                if (val == 1) {
                    val = val - 1;
                    setFormData({ ...formData, sayi: val });
                    setErrors({ ...errors, sayi: true });
                } else if (val >= 2) {
                    val = val - 1;
                    setFormData({ ...formData, sayi: val });
                }
            } else if (id === "increase") {
                let val = formData.sayi;
                val = val + 1;
                setFormData({ ...formData, sayi: val });
                setErrors({ ...errors, sayi: false });
            }
        } else if (type === "radio") {
            setFormData({ ...formData, boyut: id });
            setErrors({ ...errors, boyut: false });
        } else {
            setFormData({ ...formData, [name]: value });
            setErrors({ ...errors, [name]: false })
        }

        if (name === 'isim') {

            if (value.length >= 3) {
                setErrors({ ...errors, isim: false });
            } else {
                setErrors({ ...errors, isim: true });
            }
        }

        // if (name === 'hamur') {
        //     setErrors({ ...errors, hamur: false });
        // }

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!isValid) return;

        axios.post('https://reqres.in/api/pizza', formData)
            .then((response) => {
                console.log(response.data);
                setFormData(initialForm);
                history.push('/success');
            }).catch((error) => {
                console.log(error);
            });
    }


    return (
        <div className='general-wrapper'>
            <Header>
                <img src={logo} alt="logo" />
                <p>Anasayfa - Sipariş Oluştur</p>
            </Header>
            <DivMidWrapper>
                <Section>
                    <div className='pizza-name'>
                        <p>Position Absolute Acı Pizza</p>
                    </div>
                    <div className='pizza-specs'>
                        <div className='pizza-price'>
                            <p>85₺</p>
                        </div>
                        <div className='pizza-comments'>
                            <p>4.9</p>
                            <p>(200)</p>
                        </div>
                    </div>
                    <div className='pizza-explanation'>
                        <p>Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir.. Küçük bir pizzaya bazen pizzetta denir.</p>
                    </div>
                </Section >

                <DivFormWrapper>
                    <StyledForm onSubmit={handleSubmit}>
                        <DivBoyuthamur>
                            <StyledFGBoyut>
                                <p>Boyut Seç</p>
                                <div>
                                    <Input type="radio" id="küçük" name="boyut" value={formData.boyut} onChange={handleChange} />
                                    <Label for="küçük">Küçük</Label>
                                </div>
                                <div>
                                    <Input type="radio" id="orta" name="boyut" value={formData.boyut} onChange={handleChange} />
                                    <Label for="orta">Orta</Label>
                                </div>
                                <div>
                                    <Input type="radio" id="büyük" name="boyut" value={formData.boyut} onChange={handleChange} />
                                    <Label for="büyük">Büyük</Label>
                                </div>
                            </StyledFGBoyut>

                            <StyledFGHamur>
                                <Label for="dough">Hamur Seç</Label>
                                <Input type="select" id="dough" name="hamur" value={formData.hamur} onChange={handleChange}>
                                    <option value="klasik">Klasik Hamur</option>
                                    <option value="ince">İnce Hamur</option>
                                    <option value="parmesanKenarInce">Parmesan Kenar İnce Hamur</option>
                                    <option value="parmesanKenarKlasik">Parmesan Kenar Klasik Hamur</option>
                                </Input>
                            </StyledFGHamur>
                        </DivBoyuthamur>
                        <StyledFGMalzemeText>
                            <p>Ek Malzemeler</p>
                            <p>En fazla 10 malzeme seçebilirsiniz. 5₺</p>
                        </StyledFGMalzemeText>

                        <StyledFGMalzemeCheckbox>
                            {malzemeListesi.map((malzeme, index) => {
                                return (
                                    <Label key={index}><Input type="checkbox" id={malzeme} name="ingredients" value={malzeme} checked={formData.malzemeler.includes(malzeme)} onChange={handleChange}></Input>{toTitleCase(malzeme)}</Label>
                                );
                            })}
                            {errors.malzemeler ? (<div>
                                <FormFeedback>{errorMessages.malzemeler}</FormFeedback>
                            </div>
                            ) : (<div></div>)}
                        </StyledFGMalzemeCheckbox>

                        <StyledFGIsim>
                            <Label for="username">İsminiz</Label>
                            <Input type="text" id="username" name="isim" value={formData.isim} onChange={handleChange} invalid={errors.isim} />
                            {errors.isim ? (<div>
                                <FormFeedback>{errorMessages.isim}</FormFeedback>
                            </div>
                            ) : (<div></div>)}
                        </StyledFGIsim>

                        <StyledFGNotlar>
                            <Label for="ordernotes">
                                Sipariş Notu
                            </Label>
                            <Input
                                id="ordernotes"
                                name="not"
                                type="textarea"
                                placeholder="Siparişine eklemek istediğin bir not var mı?"
                                value={formData.not}
                                onChange={handleChange}
                                rows={5}
                                cols={50}
                            />
                        </StyledFGNotlar>

                        <hr></hr>

                        <StyledFGSayi>
                            <Button type="button" id="decrease" disabled={formData.sayi < 1} onClick={handleChange}>-</Button>
                            <p>{formData.sayi}</p>
                            <Button type="button" id="increase" onClick={handleChange}>+</Button>
                        </StyledFGSayi>

                        <StyledFGOzet>
                            <p>Sipariş Toplamı</p>
                            <p>Seçimler</p>
                            <p>{formData.malzemeler.length * 5}</p>
                            <p>Toplam</p>
                            <p>{(formData.malzemeler.length * 5 + 85) * formData.sayi}</p>

                        </StyledFGOzet>

                        <StyledFGButonsbmt>
                            <Button type='submit' disabled={!isValid}>SİPARİŞ VER</Button>
                        </StyledFGButonsbmt>


                    </StyledForm>
                </DivFormWrapper>
            </DivMidWrapper >
        </div>
    );

}