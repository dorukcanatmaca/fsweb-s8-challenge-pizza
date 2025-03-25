import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Form, FormGroup, FormText, FormFeedback, Label, Input, Button, Col } from 'reactstrap';
import './SiparisFormu.css';
import logo from "../images/iteration-1-images/logo.svg";


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
            <section>
                <img src={logo} alt="logo" />
                <p>Anasayfa - Seçenekler - Sipariş Oluştur</p>
            </section>
            <div className='mid-wrapper'>
                <section className='pizza-info'>
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
                </section >

                <div className='form-wrapper'>
                    <Form onSubmit={handleSubmit}>

                        <FormGroup className='form-size'>
                            <p>Boyut Seç</p>
                            <Input type="radio" id="küçük" name="boyut" value={formData.boyut} onChange={handleChange} />
                            <Label for="küçük">Küçük</Label>
                            <Input type="radio" id="orta" name="boyut" value={formData.boyut} onChange={handleChange} />
                            <Label for="orta">Orta</Label>
                            <Input type="radio" id="büyük" name="boyut" value={formData.boyut} onChange={handleChange} />
                            <Label for="büyük">Büyük</Label>
                        </FormGroup>

                        <FormGroup className='form-dough'>
                            <Label for="dough">Hamur Seç</Label>
                            <Input type="select" id="dough" name="hamur" value={formData.hamur} onChange={handleChange}>
                                <option value="klasik">Klasik Hamur</option>
                                <option value="ince">İnce Hamur</option>
                                <option value="parmesanKenarInce">Parmesan Kenar İnce Hamur</option>
                                <option value="parmesanKenarKlasik">Parmesan Kenar Klasik Hamur</option>
                            </Input>
                        </FormGroup>

                        <FormGroup className='form-ingredients'>
                            <p>Ek Malzemeler</p>
                            <p>En fazla 10 malzeme seçebilirsiniz. 5₺</p>
                        </FormGroup>

                        <FormGroup className='form-ingredients-checkbox'>
                            {malzemeListesi.map((malzeme, index) => {
                                return (
                                    <Label key={index}><Input type="checkbox" id={malzeme} name="ingredients" value={malzeme} checked={formData.malzemeler.includes(malzeme)} onChange={handleChange}></Input>{toTitleCase(malzeme)}</Label>
                                );
                            })}
                            {errors.malzemeler && (
                                <FormFeedback>{errorMessages.malzemeler}</FormFeedback>
                            )}
                        </FormGroup>

                        <FormGroup className='username'>
                            <Label for="username">İsminiz</Label>
                            <Input type="text" id="username" name="isim" value={formData.isim} onChange={handleChange} invalid={errors.isim} />
                            {errors.isim && (
                                <FormFeedback>{errorMessages.isim}</FormFeedback>
                            )}
                        </FormGroup>

                        {/* <FormGroup className='order-notes'>
                                <Label for="myordernotes">Sipariş Notu</Label>
                                <textarea id="myordernotes" name="myordernotes" rows="4" cols="50">
                                    Siparişine eklemek istediğin bir not var mı?
                                </textarea>
                            </FormGroup> */}

                        <FormGroup row className='order-notes'>
                            <Label
                                for="ordernotes"
                                sm={2}
                            >
                                Sipariş Notu
                            </Label>
                            <Col sm={10}>
                                <Input
                                    id="ordernotes"
                                    name="not"
                                    type="textarea"
                                    placeholder="Siparişine eklemek istediğin bir not var mı?"
                                    value={formData.not}
                                    onChange={handleChange}
                                />
                            </Col>
                        </FormGroup>

                        <FormGroup className='ordercount'>
                            <Button type="button" id="decrease" disabled={formData.sayi < 1} onClick={handleChange}>-</Button>
                            <p>{formData.sayi}</p>
                            <Button type="button" id="increase" onClick={handleChange}>+</Button>
                        </FormGroup>

                        <FormGroup className='ordersummary'>
                            <p>Sipariş Toplamı</p>
                            <p>Seçimler</p>
                            <p>{formData.malzemeler.length * 5}</p>
                            <p>Toplam</p>
                            <p>{(formData.malzemeler.length * 5 + 85) * formData.sayi}</p>
                            <Button type='submit' disabled={!isValid}>SİPARİŞ VER</Button>
                        </FormGroup>

                    </Form>
                </div >
            </div >
        </div>
    );

}