import { useState } from "react";
import axios from "axios";
import "./SelectionPage.css";
import FinishingPage from "./FinishingPage";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SelectionPage() {
    const [handleFinish, setHandleFinish] = useState(false);

    const handleFinishClick = async () => {
        if (!validateForm()) return;

        const payload = {
            boyut,
            hamur,
            ekMalzemeler,
            not,
            adet,
            toplam: toplamHesapla(),
        };

        try {

            const response = await axios.post("https://reqres.in/api/pizza", payload);
            console.log(response.data);
            toast.success("Siparişiniz başarıyla gönderildi!", { autoClose: 2000 });
            setHandleFinish(true);
        } catch (error) {
            console.error("Hata:", error);
            toast.error("Sipariş gönderiminde bir hata oluştu!", { autoClose: 2000 });
        }
    };

    const MALZEMELER = [
        "Pepperoni",
        "Sosis",
        "Kanada Jambonu",
        "Tavuk Izgara",
        "Soğan",
        "Domates",
        "Mısır",
        "Jalapeno",
        "Sarımsak",
        "Sucuk",
        "Ananas",
        "Kabak",
    ];

    const [boyut, setBoyut] = useState("");
    const [hamur, setHamur] = useState("Hamur Kalınlığı");
    const [ekMalzemeler, setEkMalzemeler] = useState([]);
    const [not, setNot] = useState("");
    const [adet, setAdet] = useState(1);

    const ANA_FIYAT = 85.5;
    const MALZEME_FIYAT = 5;

    const ekMalzemeDegistir = (event) => {
        const deger = event.target.value;
        setEkMalzemeler((onceki) =>
            onceki.includes(deger)
                ? onceki.filter((malzeme) => malzeme !== deger)
                : [...onceki, deger]
        );
    };

    const toplamHesapla = () => ANA_FIYAT + ekMalzemeler.length * MALZEME_FIYAT * adet;

    const validateForm = () => {
        if (!boyut) {
            toast.error("Lütfen pizza boyutunu seçin!", { autoClose: 2000 });
            return false;
        }
        if (hamur === "Hamur Kalınlığı") {
            toast.error("Lütfen hamur tipini seçin!", { autoClose: 2000 });
            return false;
        }
        if (ekMalzemeler.length < 4) {
            toast.error("Lütfen en az 4 malzeme seçin!", { autoClose: 2000 });
            return false;
        }
        if (ekMalzemeler.length > 10) {
            toast.error("En fazla 10 malzeme seçebilirsiniz!", { autoClose: 2000 });
            return false;
        }
        return true;
    };

    return (
        <>
            <ToastContainer />
            {handleFinish ? (
                <FinishingPage />
            ) : (
                <div className="secim-sayfasi">
                    <h1>Position Absolute Acı Pizza</h1>
                    <p>85.50₺</p>
                    <p>4.9 (200)</p>
                    <p>
                        Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı
                        pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
                        diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
                        ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle
                        yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan
                        kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta
                        denir.
                    </p>

                    <div className="boyut-ve-hamur">
                        <div className="form-grubu">
                            <label>Boyut Seç *</label>
                            <div className="dikey-secim">
                                {["Küçük", "Orta", "Büyük"].map((secim) => (
                                    <label key={secim}>
                                        <input
                                            type="radio"
                                            name="boyut"
                                            value={secim}
                                            onChange={(e) => setBoyut(e.target.value)}
                                        />
                                        {secim}
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="form-grubu">
                            <label>Hamur Seç *</label>
                            <select value={hamur} onChange={(e) => setHamur(e.target.value)}>
                                <option disabled>Hamur Kalınlığı</option>
                                <option value="İnce">İnce</option>
                                <option value="Kalın">Kalın</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-grubu">
                        <label>Ek Malzemeler</label>
                        <p>En fazla 10 malzeme seçebilirsiniz. 5₺</p>
                        <div className="checkbox">
                            {MALZEMELER.map((malzeme) => (
                                <label key={malzeme}>
                                    <input
                                        type="checkbox"
                                        value={malzeme}
                                        onChange={ekMalzemeDegistir}
                                        checked={ekMalzemeler.includes(malzeme)}
                                    />
                                    {malzeme}
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="form-grubu">
                        <label>Sipariş Notu</label>
                        <textarea
                            placeholder="Siparişine eklemek istediğin bir not var mı?"
                            value={not}
                            onChange={(e) => setNot(e.target.value)}
                        />
                    </div>

                    <div className="form-grubu adet-grubu">
                        <button onClick={() => setAdet((adet) => Math.max(1, adet - 1))}>
                            -
                        </button>
                        <span>{adet}</span>
                        <button onClick={() => setAdet((adet) => adet + 1)}>+</button>
                    </div>

                    <div className="toplam-ozet">
                        <p>Sipariş Toplamı</p>
                        <div className="fiyatlar">
                            <p>
                                <span>Seçimler</span> <span>{(ekMalzemeler.length * MALZEME_FIYAT).toFixed(2)}₺</span>
                            </p>
                            <p>
                                <span>Toplam</span> <span>{toplamHesapla().toFixed(2)}₺</span>
                            </p>
                        </div>
                        <button type="button" className="btn" onClick={handleFinishClick}>
                            SİPARİŞ VER
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
