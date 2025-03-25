import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import './SiparisFormu.css';
import logo from "../images/iteration-1-images/logo.svg";

export default function SiparisFormu() {
    return (
        <>
            <section>
                <img src={logo} alt="logo" />
                <p>Anasayfa - Seçenekler - Sipariş Oluştur</p>
            </section>
            <div className='general-wrapper'>
                <div className='pizza-name'>
                    <p>Position Absolute Acı Pizza</p>
                </div>
                <div className='pizza-specs'>
                    <div className='pizza-price'>
                        <p>85.50₺</p>
                    </div>
                    <div className='pizza-details'>
                        <p>4.9</p>
                        <p>(200)</p>
                    </div>
                </div>
                <div className='pizza-explanation'>
                    <p>Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir.. Küçük bir pizzaya bazen pizzetta denir.</p>
                </div>
                <div className='form-wrapper'>
                    <form>
                        <div className='form-size'>
                            <p>Boyut Seç</p>
                            <input type="radio" id="küçük" name="pizza-size" value="küçük" />
                            <label htmlFor="küçük">Küçük</label>
                            <input type="radio" id="orta" name="pizza-size" value="orta" />
                            <label htmlFor="orta">Orta</label>
                            <input type="radio" id="büyük" name="pizza-size" value="büyük" />
                            <label htmlFor="büyük">Büyük</label>
                        </div>
                        <div className='form-dough'>
                            <label htmlFor="dough">Hamur Seç</label>
                            <select id="dough" name="dough">
                                <option value="ince">İnce Hamur</option>
                                <option value="klasik">Klasik Hamur</option>
                                <option value="parmesanKenarInce">Parmesan Kenar İnce Hamur</option>
                                <option value="parmesanKenarKlasik">Parmesan Kenar Klasik Hamur</option>
                            </select>
                        </div>
                        <div className='form-ingredients'>
                            <p>Ek Malzemeler</p>
                            <p>En fazla 10 malzeme seçebilirsiniz. 5₺</p>
                            <div className='form-ingredients-checkbox'>
                                <input type="checkbox" id="pepperoni" name="pepperoni" value="pepperoni" />
                                <label htmlFor="pepperoni">Pepperoni</label>
                                <input type="checkbox" id="domates" name="domates" value="domates" />
                                <label htmlFor="domates">Domates</label>
                                <input type="checkbox" id="biber" name="biber" value="biber" />
                                <label htmlFor="biber">Biber</label>
                                <input type="checkbox" id="sosis" name="sosis" value="sosis" />
                                <label htmlFor="sosis">Sosis</label>
                                <input type="checkbox" id="misir" name="misir" value="misir" />
                                <label htmlFor="misir">Mısır</label>
                                <input type="checkbox" id="sucuk" name="sucuk" value="sucuk" />
                                <label htmlFor="sucuk">Sucuk</label>
                                <input type="checkbox" id="jambon" name="jambon" value="jambon" />
                                <label htmlFor="jambon">Jambon</label>
                                <input type="checkbox" id="ananas" name="ananas" value="ananas" />
                                <label htmlFor="ananas">Ananas</label>
                                <input type="checkbox" id="jalapeno" name="jalapeno" value="jalapeno" />
                                <label htmlFor="jalapeno">Jalapeno</label>
                                <input type="checkbox" id="kabak" name="kabak" value="kabak" />
                                <label htmlFor="kabak">Kabak</label>
                                <input type="checkbox" id="sogan" name="sogan" value="sogan" />
                                <label htmlFor="sogan">Soğan</label>
                                <input type="checkbox" id="sarimsak" name="sarimsak" value="sarimsak" />
                                <label htmlFor="sarimsak">Sarımsak</label>
                            </div>
                        </div>
                        <div className='username'>
                            <label htmlFor="username">İsminiz</label>
                            <input type="text" id="username" name="username" />
                        </div>
                        <div className='order-notes'>
                            <label htmlFor="ordernotes">Sipariş Notu</label>
                            <textarea id="ordernotes" name="ordernotes" rows="4" cols="50">
                                Siparişine eklemek istediğin bir not var mı?
                            </textarea>
                        </div>
                        <div className='ordercount'>
                            <button>-</button>
                            <p>1</p>
                            <button>+</button>
                        </div>
                        <div className='ordersummary'>
                            <p>Sipariş Toplamı</p>
                            <p>Seçimler</p>
                            <p>Toplam</p>
                            <div className='ordersubmit'>
                                <button type='submit'>SİPARİŞ VER</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div >
        </>
    )
}