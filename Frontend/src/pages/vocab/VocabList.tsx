import AppLayout from "../../components/AppLayout";
import WordListCard from "./components/WordListCard";
import { OneDictionaryRecord, OneDictionaryRecordTwo, OneDictionaryRecordThree } from "./data";

function VocabList() {

    const dictionaryList = [ OneDictionaryRecord, OneDictionaryRecordTwo, OneDictionaryRecordThree ];

    return (
        <div>
            <AppLayout title="Vocab" subTitle="Words List">
                { dictionaryList.map(
                    (dictionary) => {
                        return <WordListCard 
                            key={dictionary.id} 
                            word={[dictionary.id]} 
                            lexicalEntries={dictionary.lexicalEntries} 
                        />
                    })
                }
            </AppLayout>
        </div>
    )
}

export default VocabList;
