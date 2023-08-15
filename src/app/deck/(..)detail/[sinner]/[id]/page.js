import Modal from "@/component/modal/modal";
import Frame from "@/component/frame/frame";

export default function Modaldetail({params}){
    const character = require(`public/data/${params.sinner}/${params.id}.json`);
    return (
        <Modal>
            <Frame json={character}  params={params}/>
        </Modal>
    );
}