var itens = [
    { nome: "6-METIL CUMARINA", cas: "118-71-8", tipo: "Amadeirado" },
  { nome: "ACETAL R", cas: "105-57-7", tipo: "Floral" },
  { nome: "ACETANISOL CRISTAIS", cas: "103-54-8", tipo: "Doce" },
  { nome: "ACETATO AMILA", cas: "628-63-7", tipo: "Frutado" },
  { nome: "ACETATO BENZILA", cas: "140-11-4", tipo: "Doce" },
  { nome: "ACETATO CEDRENILA", cas: "77-54-3", tipo: "Amadeirado" },
  { nome: "ACETATO CINAMILA", cas: "103-54-8", tipo: "Doce" },
  { nome: "ACETATO CITRONELILA", cas: "150-84-5", tipo: "Cítrico" },
  { nome: "ACETATO DIMETIL BENZIL CARBINOL", cas: "151-05-3", tipo: "Floral" },
  { nome: "ACETATO ETILA", cas: "141-78-6", tipo: "Doce" },
  { nome: "ACETATO FENIL ETILA", cas: "93-92-5", tipo: "Floral" },
  { nome: "ACETATO FENOXI ALILA (AC PA)", cas: "122-97-4", tipo: "Floral" },
  { nome: "ACETATO GERANILA", cas: "105-87-3", tipo: "Floral" },
  { nome: "ACETATO GUAIACO", cas: "93-16-3", tipo: "Amadeirado" },
  { nome: "ACETATO HEXILA", cas: "142-92-7", tipo: "Frutado" },
  { nome: "ACETATO ISOBORNILA", cas: "125-12-2", tipo: "Amadeirado" },
  { nome: "ACETATO ISONONILA", cas: "7779-44-6", tipo: "Doce" },
  { nome: "ACETATO LINALILA", cas: "78-36-4", tipo: "Floral" },
  { nome: "ACETATO NOPILA", cas: "591-87-7", tipo: "Amadeirado" },
  { nome: "ACETATO P-ANISILA", cas: "105-13-5", tipo: "Doce" },
  { nome: "ACETATO PRENILA", cas: "97-93-8", tipo: "Doce" },
  { nome: "ACETATO TERPENILA", cas: "98-55-5", tipo: "Cítrico" },
  { nome: "ACETATO VERDILA", cas: "105-14-8", tipo: "Doce" },
  { nome: "ACETO ACETATOETILA", cas: "141-78-6", tipo: "Doce" },
  { nome: "ACETOFENONA", cas: "98-86-2", tipo: "Amadeirado" },
  { nome: "ACETOIN (ACETIL METIL CARBINOL)", cas: "513-86-0", tipo: "Doce" },
  { nome: "ACIDO BUTIRICO", cas: "107-92-6", tipo: "Frutado" },
  { nome: "ALCOOL BENZILICO", cas: "100-51-6", tipo: "Doce" },
  { nome: "ALCOOL C 10", cas: "112-30-1", tipo: "Amadeirado" },
  { nome: "ALCOOL C 12", cas: "112-25-4", tipo: "Amadeirado" },
  { nome: "ALCOOL CEREAIS", cas: "8002-74-2", tipo: "Doce" },
  { nome: "ALCOOL FENCHILICO", cas: "100-67-4", tipo: "Amadeirado" },
  { nome: "ALCOOL FENIL ETILICO", cas: "122-98-5", tipo: "Doce" },
  { nome: "ALCOOL ISOAMILICO", cas: "123-51-3", tipo: "Frutado" },
  { nome: "ALCOOL P-ANISICO", cas: "123-51-3", tipo: "Amadeirado" },
  { nome: "ALDEIDO AMIL CINAMICO", cas: "122-40-7", tipo: "Floral" },
  { nome: "ALDEIDO BENZOICO", cas: "100-52-7", tipo: "Doce" },
  { nome: "ALDEIDO C  6", cas: "66-25-1", tipo: "Doce" },
  { nome: "ALDEIDO C  8", cas: "124-19-6", tipo: "Floral" },
  { nome: "ALDEIDO C  9", cas: "2051-28-7", tipo: "Floral" },
  { nome: "ALDEIDO C 10", cas: "112-31-2", tipo: "Amadeirado" },
  { nome: "ALDEIDO C 11 MOA", cas: "124-13-0", tipo: "Doce" },
  { nome: "ALDEIDO C 11 UNDECILICO", cas: "112-45-8", tipo: "Floral" },
  { nome: "ALDEIDO C 12 LAURICO", cas: "112-05-0", tipo: "Doce" },
  { nome: "ALDEIDO C 12 MNA", cas: "126-54-7", tipo: "Amadeirado" },
  { nome: "ALDEIDO C 16", cas: "629-73-2", tipo: "Floral" },
  { nome: "ALDEIDO C 18", cas: "104-61-0", tipo: "Doce" },
  { nome: "ALDEIDO CICLAMEN", cas: "80-54-6", tipo: "Floral" },
  { nome: "ALDEIDO CINAMICO", cas: "143-07-7", tipo: "Amadeirado" },
  { nome: "ALDEIDO FENIL ACETICO DMA", cas: "122-78-1", tipo: "Floral" },
  { nome: "ALDEIDO HEXIL CINAMICO", cas: "101-86-0", tipo: "Amadeirado" },
  { nome: "ALDEIDO MYRAC", cas: "122-61-6", tipo: "Floral" },
  { nome: "ALDEIDO SUPRA", cas: "104-66-5", tipo: "Floral" },
  { nome: "AMBRETTOLIDE", cas: "7779-50-2", tipo: "Amadeirado" },
  { nome: "AMBROCENIDE 10 DPG", cas: "68155-66-8", tipo: "Doce" },
  { nome: "AMBROXAN - AMBROXIDE", cas: "6790-58-5", tipo: "Doce" },
  { nome: "ANETOL", cas: "104-46-1", tipo: "Doce" },
  { nome: "ANTHER", cas: "140-11-4", tipo: "Doce" },
  { nome: "ANTRANILATO METILA", cas: "587-02-0", tipo: "Amadeirado" },
  { nome: "APRIFLOREN", cas: "88083-50-9", tipo: "Floral" },
  { nome: "BACDANOL", cas: "693-18-7", tipo: "Amadeirado" },
  { nome: "BALSAMO COPAIBA", cas: "9000-65-1", tipo: "Amadeirado" },
  { nome: "BASILICO OE", cas: "8015-73-4", tipo: "Cítrico" },
  { nome: "BENZOATO BENZILA", cas: "120-51-4", tipo: "Doce" },
  { nome: "BENZOATO METILA", cas: "93-58-3", tipo: "Doce" },
  { nome: "BENZOFENONA", cas: "119-61-9", tipo: "Amadeirado" },
  { nome: "BERGAMOTA OE", cas: "8007-75-8", tipo: "Cítrico" },
  { nome: "BHT", cas: "128-37-0", tipo: "Amadeirado" },
  { nome: "BOISAMBRENE FORTE", cas: "68917-89-7", tipo: "Amadeirado" },
  { nome: "BORNEOL", cas: "507-70-0", tipo: "Amadeirado" },
  { nome: "BREU (COLOFONIA)", cas: "8050-09-7", tipo: "Amadeirado" },
  { nome: "BUTIRATO DIMETIL BENZIL CARBINOL", cas: "19402-90-1", tipo: "Doce" },
  { nome: "BUTIRATO ETILA", cas: "105-54-4", tipo: "Doce" },
  { nome: "BUTIRATO ISOAMILA", cas: "123-95-5", tipo: "Doce" },
  { nome: "CANANGA OE", cas: "8006-81-3", tipo: "Floral" },
  { nome: "CANELA FOLHAS OE", cas: "8015-91-6", tipo: "Amadeirado" },
  { nome: "CANFENO", cas: "99-84-3", tipo: "Cítrico" },
  { nome: "CANFORA", cas: "76-22-2", tipo: "Amadeirado" },
  { nome: "CANTHOXAL", cas: "95-14-7", tipo: "Cítrico" },
  { nome: "CAPROATO ALILA", cas: "123-68-2", tipo: "Frutado" },
  { nome: "CARIOFILENE BETA", cas: "87-44-5", tipo: "Amadeirado" },
  { nome: "CARVONE LAEVO", cas: "6485-40-1", tipo: "Cítrico" },
  { nome: "CASHMERAN", cas: "33704-61-9", tipo: "Amadeirado" },
  { nome: "CASSIS BASE 345B FIRM", cas: "68917-29-9", tipo: "Frutado" },
  { nome: "CEDRAMBER", cas: "6790-58-5", tipo: "Doce" },
  { nome: "CEDRO FOLHAS OE", cas: "8007-80-5", tipo: "Amadeirado" },
  { nome: "CEDRO MADEIRA TEXAS OE", cas: "8008-79-5", tipo: "Amadeirado" },
  { nome: "CEDRO MADEIRA VIRGINIA OE", cas: "68916-48-3", tipo: "Amadeirado" },
  { nome: "CEDROL", cas: "77-53-2", tipo: "Amadeirado" },
  { nome: "CICLOGALBANATE", cas: "67802-98-2", tipo: "Amadeirado" },
  { nome: "CINAMATO ETILA", cas: "103-36-6", tipo: "Doce" },
  { nome: "CINAMATO METILA", cas: "103-26-4", tipo: "Amadeirado" },
  { nome: "CIS 3 HEXENOL", cas: "928-96-1", tipo: "Cítrico" },
  { nome: "CITRAL", cas: "5392-40-5", tipo: "Cítrico" },
  { nome: "CITRATO TRIETILA", cas: "77-93-0", tipo: "Cítrico" },
  { nome: "CITRONELAL", cas: "106-23-0", tipo: "Cítrico" },
  { nome: "CITRONELIL NITRILE", cas: "51565-50-9", tipo: "Cítrico" },
  { nome: "CITRONELOL", cas: "106-22-9", tipo: "Floral" },
  { nome: "CORANTE GREEN CI 74260", cas: "3278-89-5", tipo: "Doce" },
  { nome: "CRAVO FOLHAS OE", cas: "8000-34-8", tipo: "Amadeirado" },
  { nome: "CREMOPHOR RH 400", cas: "9005-65-6", tipo: "Doce" },
  { nome: "CUMARINA", cas: "91-64-5", tipo: "Amadeirado" },
  { nome: "DAMASCENONE", cas: "23726-92-3", tipo: "Floral" },
  { nome: "DAMASCONE ALFA", cas: "19666-30-9", tipo: "Floral" },
  { nome: "DEP (DIETILFTALATO)", cas: "84-66-2", tipo: "Doce" },
  { nome: "DIFENIL OXIDO", cas: "101-84-8", tipo: "Floral" },
  { nome: "DIHIDRO CUMARINA", cas: "119-84-6", tipo: "Doce" },
  { nome: "DIHIDRO MIRCENOL", cas: "93778-50-2", tipo: "Cítrico" },
  { nome: "DIPROPILENOGLICOL (DPG)", cas: "25265-71-8", tipo: "Doce" },
  { nome: "ETIL AMIL CETONA", cas: "141-97-9", tipo: "Amadeirado" },
  { nome: "ETIL MALTOL", cas: "118-71-8", tipo: "Doce" },
  { nome: "ETIL VANILINA", cas: "121-32-4", tipo: "Doce" },
  { nome: "EUCALIPTO CITRODORA OE", cas: "8000-48-4", tipo: "Cítrico" },
  { nome: "EUCALIPTOL USP", cas: "470-82-6", tipo: "Cítrico" },
  { nome: "EUGENOL", cas: "97-53-0", tipo: "Amadeirado" },
  { nome: "EXTRATO DE PÊSSEGO (DURAZNO)", cas: "90082-21-6", tipo: "Frutado" },
  { nome: "FENIL ACETATO ISOAMILA", cas: "103-05-9", tipo: "Floral" },
  { nome: "FENILACETATO ETILA", cas: "101-97-3", tipo: "Doce" },
  { nome: "FENILACETATO METILA", cas: "101-41-7", tipo: "Floral" },
  { nome: "FENOXI ETANOL", cas: "122-99-6", tipo: "Doce" },
  { nome: "FILBERTONE", cas: "1205-17-0", tipo: "Doce" },
  { nome: "FLORALOZONE", cas: "67554-24-1", tipo: "Floral" },
  { nome: "FLOROPAL", cas: "67784-53-4", tipo: "Floral" },
  { nome: "FORMIATO CITRONELILA", cas: "7779-44-6", tipo: "Cítrico" },
  { nome: "FRUCTALATE", cas: "77507-96-1", tipo: "Doce" },
  { nome: "6-METIL CUMARINA", cas: "92-48-8", tipo: "Amadeirada" },
    { nome: "ACETAL R", cas: "105-57-7", tipo: "Floral" },
    { nome: "ACETANISOL CRISTAIS", cas: "103-54-8", tipo: "Doce" },
    { nome: "ACETATO AMILA", cas: "628-63-7", tipo: "Frutado" },
    { nome: "ACETATO BENZILA", cas: "140-11-4", tipo: "Doce" },
    { nome: "ACETATO CEDRENILA", cas: "77-49-6", tipo: "Amadeirada" },
    { nome: "ACETATO CINAMILA", cas: "103-54-8", tipo: "Doce" },
    { nome: "ACETATO CITRONELILA", cas: "7779-64-6", tipo: "Cítrica" },
    { nome: "ACETATO DIMETIL BENZIL CARBINOL", cas: "86-49-1", tipo: "Doce" },
    { nome: "ACETATO ETILA", cas: "141-78-6", tipo: "Frutado" },
    { nome: "ACETATO FENIL ETILA", cas: "93-92-5", tipo: "Floral" },
    { nome: "ACETATO FENOXI ALILA (AC PA)", cas: "122-79-2", tipo: "Doce" },
    { nome: "ACETATO GERANILA", cas: "105-87-3", tipo: "Floral" },
    { nome: "ACETATO GUAIACO", cas: "105-13-5", tipo: "Amadeirada" },
    { nome: "ACETATO HEXILA", cas: "142-92-7", tipo: "Frutado" },
    { nome: "ACETATO ISOBORNILA", cas: "125-12-2", tipo: "Amadeirada" },
    { nome: "ACETATO ISONONILA", cas: "13119-34-9", tipo: "Floral" },
    { nome: "ACETATO LINALILA", cas: "78-36-4", tipo: "Floral" },
    { nome: "ACETATO NOPILA", cas: "591-87-7", tipo: "Frutado" },
    { nome: "ACETATO P-ANISILA", cas: "100-11-8", tipo: "Doce" },
    { nome: "ACETATO PRENILA", cas: "106-70-7", tipo: "Doce" },
    { nome: "ACETATO TERPENILA", cas: "80-26-2", tipo: "Frutado" },
    { nome: "ACETATO VERDILA", cas: "141-95-7", tipo: "Frutado" },
    { nome: "ACETATO VETICOL", cas: "118-87-6", tipo: "Doce" },
    { nome: "ACETO ACETATOETILA", cas: "141-97-9", tipo: "Frutado" },
    { nome: "ACETOFENONA", cas: "98-86-2", tipo: "Doce" },
    { nome: "ACETOIN (ACETIL METIL CARBINOL)", cas: "513-86-0", tipo: "Doce" },
    { nome: "ACIDO BUTIRICO", cas: "107-92-6", tipo: "Frutado" },
    { nome: "ALCOOL BENZILICO", cas: "100-51-6", tipo: "Doce" },
    { nome: "ALCOOL C 10", cas: "112-54-9", tipo: "Frutado" },
    { nome: "ALCOOL C 12", cas: "112-72-1", tipo: "Doce" },
    { nome: "ALCOOL CEREAIS", cas: "64-17-5", tipo: "Frutado" },
    { nome: "ALCOOL FENCHILICO", cas: "928-96-1", tipo: "Floral" },
    { nome: "ALCOOL FENIL ETILICO", cas: "122-99-6", tipo: "Floral" },
    { nome: "ALCOOL ISOAMILICO", cas: "123-51-3", tipo: "Frutado" },
    { nome: "ALCOOL P-ANISICO", cas: "123-93-3", tipo: "Doce" },
    { nome: "ALDEIDO AMIL CINAMICO", cas: "122-40-7", tipo: "Doce" },
    { nome: "ALDEIDO BENZOICO", cas: "93-89-0", tipo: "Doce" },
    { nome: "ALDEIDO C 6", cas: "66-25-1", tipo: "Frutado" },
    { nome: "ALDEIDO C 8", cas: "124-19-6", tipo: "Doce" },
    { nome: "ALDEIDO C 9", cas: "124-25-4", tipo: "Doce" },
    { nome: "ALDEIDO C 10", cas: "112-31-2", tipo: "Doce" },
    { nome: "ALDEIDO C 11 MOA", cas: "112-54-9", tipo: "Frutado" },
    { nome: "ALDEIDO C 11 UNDECILICO", cas: "112-55-0", tipo: "Doce" },
    { nome: "ALDEIDO C 12 LAURICO", cas: "112-72-1", tipo: "Doce" },
    { nome: "ALDEIDO C 12 MNA", cas: "112-72-1", tipo: "Doce" },
    { nome: "ALDEIDO C 16", cas: "124-25-4", tipo: "Doce" },
    { nome: "ALDEIDO C 18", cas: "124-25-4", tipo: "Doce" },
    { nome: "ALDEIDO CICLAMEN", cas: "7779-64-6", tipo: "Floral" },
    { nome: "ALDEIDO CINAMICO", cas: "143-07-7", tipo: "Amadeirada" },
    { nome: "ALDEIDO FENIL ACETICO DMA", cas: "122-51-0", tipo: "Doce" },
    { nome: "ALDEIDO HEXIL CINAMICO", cas: "101-86-0", tipo: "Doce" },
    { nome: "ALDEIDO MYRAC", cas: "124-25-4", tipo: "Doce" },
    { nome: "ALDEIDO SUPRA", cas: "116-09-6", tipo: "Doce" },
    { nome: "AMBRETTOLIDE", cas: "7779-64-6", tipo: "Floral" },
    { nome: "AMBROCENIDE 10 DPG", cas: "7779-64-6", tipo: "Floral" },
    { nome: "AMBROXAN - AMBROXIDE", cas: "7779-64-6", tipo: "Floral" },
    { nome: "ANETOL", cas: "7779-64-6", tipo: "Doce" },
    { nome: "ANTHER", cas: "7779-64-6", tipo: "Floral" },
    { nome: "ANTRANILATO METILA", cas: "7779-64-6", tipo: "Doce" },
    { nome: "APRIFLOREN", cas: "7779-64-6", tipo: "Frutado" },
    { nome: "BACDANOL", cas: "7779-64-6", tipo: "Frutado" },
    { nome: "BALSAMO COPAIBA", cas: "7779-64-6", tipo: "Amadeirada" },
    { nome: "BASILICO OE", cas: "7779-64-6", tipo: "Herbal" },
    { nome: "BENZOATO BENZILA", cas: "7779-64-6", tipo: "Doce" },
    { nome: "BENZOATO METILA", cas: "7779-64-6", tipo: "Doce" },
    { nome: "BENZOFENONA", cas: "7779-64-6", tipo: "Doce" },
    { nome: "BERGAMOTA OE", cas: "8007-75-8", tipo: "Cítrica" },
    { nome: "BHT", cas: "128-37-0", tipo: "Amadeirada" },
    { nome: "BOISAMBRENE FORTE", cas: "7779-64-6", tipo: "Amadeirada" },
    { nome: "BORNEOL", cas: "507-70-0", tipo: "Amadeirada" },
    { nome: "BREU (COLOFONIA)", cas: "8050-09-7", tipo: "Amadeirada" },
    { nome: "BUTIRATO DIMETIL BENZIL CARBINOL", cas: "7779-64-6", tipo: "Doce" },
    { nome: "BUTIRATO ETILA", cas: "105-54-4", tipo: "Frutado" },
    { nome: "BUTIRATO ISOAMILA", cas: "123-95-5", tipo: "Frutado" },
    { nome: "CANANGA OE", cas: "68606-83-7", tipo: "Floral" },
    { nome: "CANELA FOLHAS OE", cas: "8007-80-5", tipo: "Doce" },
    { nome: "CANFENO", cas: "97-23-4", tipo: "Amadeirada" },
    { nome: "CANFORA", cas: "76-22-2", tipo: "Amadeirada" },
    { nome: "CANTHOXAL", cas: "7779-64-6", tipo: "Frutado" },
    { nome: "CAPROATO ALILA", cas: "7779-64-6", tipo: "Frutado" },
    { nome: "CARIOFILENE BETA", cas: "87-44-5", tipo: "Amadeirada" },
    { nome: "CARVONE LAEVO", cas: "6485-40-1", tipo: "Cítrica" },
    { nome: "CASHMERAN", cas: "977053-99-6", tipo: "Amadeirada" },
    { nome: "CASSIS BASE 345B FIRM", cas: "7779-64-6", tipo: "Frutado" },
    { nome: "CEDRAMBER", cas: "20673-38-1", tipo: "Amadeirada" },
    { nome: "CEDRO FOLHAS OE", cas: "8007-80-5", tipo: "Amadeirada" },
    { nome: "CEDRO MADEIRA TEXAS OE", cas: "8007-18-9", tipo: "Amadeirada" },
    { nome: "CEDRO MADEIRA VIRGINIA OE", cas: "8007-02-1", tipo: "Amadeirada" },
    { nome: "CEDROL", cas: "77-53-2", tipo: "Amadeirada" },
    { nome: "CICLOGALBANATE", cas: "7779-64-6", tipo: "Floral" },
    { nome: "CINAMATO ETILA", cas: "103-36-6", tipo: "Doce" },
    { nome: "CINAMATO METILA", cas: "103-26-4", tipo: "Doce" },
    { nome: "CIS 3 HEXENOL", cas: "928-96-1", tipo: "Herbal" },
    { nome: "CITRAL", cas: "5392-40-5", tipo: "Cítrica" },
    { nome: "CITRATO TRIETILA", cas: "77-93-0", tipo: "Cítrica" },
    { nome: "CITRONELAL", cas: "106-23-0", tipo: "Cítrica" },
    { nome: "CITRONELIL NITRILE", cas: "515-12-4", tipo: "Cítrica" },
    { nome: "CITRONELOL", cas: "106-22-9", tipo: "Floral" },
    { nome: "CORANTE GREEN CI 74260", cas: "1328-45-6", tipo: "Amadeirada" },
    { nome: "CRAVO FOLHAS OE", cas: "8007-08-7", tipo: "Especiada" },
    { nome: "CREMOPHOR RH 400", cas: "61791-12-6", tipo: "Amadeirada" },
    { nome: "CUMARINA", cas: "91-64-5", tipo: "Amadeirada" },
    { nome: "DAMASCENONE", cas: "23696-85-7", tipo: "Floral" },
    { nome: "DAMASCONE ALFA", cas: "6759-79-1", tipo: "Floral" },
    { nome: "DEP (DIETILFTALATO)", cas: "84-66-2", tipo: "Floral" },
    { nome: "DIFENIL OXIDO", cas: "84-72-8", tipo: "Amadeirada" },
    { nome: "DIHIDRO CUMARINA", cas: "119-84-6", tipo: "Doce" },
    { nome: "DIHIDRO MIRCENOL", cas: "13877-91-3", tipo: "Cítrica" },
    { nome: "DIPROPILENOGLICOL (DPG)", cas: "25265-71-8", tipo: "Floral" },
    { nome: "ETIL AMIL CETONA", cas: "123-42-2", tipo: "Doce" },
    { nome: "ETIL MALTOL", cas: "118-71-8", tipo: "Doce" },
    { nome: "ETIL VANILINA", cas: "121-32-4", tipo: "Doce" },
    { nome: "EUCALIPTO CITRODORA OE", cas: "91771-67-4", tipo: "Cítrica" },
    { nome: "EUCALIPTOL USP", cas: "470-82-6", tipo: "Cítrica" },
    { nome: "EUGENOL", cas: "97-53-0", tipo: "Especiada" },
    { nome: "EXTRATO DE PÊSSEGO (DURAZNO)", cas: "90106-88-2", tipo: "Frutado" },
    { nome: "FENIL ACETATO ISOAMILA", cas: "103-58-2", tipo: "Doce" },
    { nome: "FENILACETATO ETILA", cas: "93-92-5", tipo: "Floral" },
    { nome: "FENILACETATO METILA", cas: "101-41-7", tipo: "Floral" },
    { nome: "FENOXI ETANOL", cas: "122-99-6", tipo: "Doce" },
    { nome: "FILBERTONE", cas: "7779-64-6", tipo: "Amadeirada" },
    { nome: "FLORALOZONE", cas: "7779-64-6", tipo: "Floral" },
    { nome: "FLOROPAL", cas: "7779-64-6", tipo: "Floral" },
    { nome: "FORMIATO CITRONELILA", cas: "7779-64-6", tipo: "Cítrica" },
    { nome: "FRUCTALATE", cas: "77507-96-1", tipo: "Doce" },
];

// Função para adicionar itens à lista
function adicionarItensNaLista() {
  var lista = document.getElementById("minha-lista");

  // Limpa a lista antes de adicionar novos itens
  lista.innerHTML = "";

  // Adiciona os itens da lista ao elemento UL
  for (var i = 0; i < itens.length; i++) {
      var novoItem = document.createElement("tr");
      novoItem.innerHTML = `
          <td>Produto: ${itens[i].nome}<br>CAS#: ${itens[i].cas}</td>
          <td>Tipo da MP: ${itens[i].tipo}</td>
      `;
      lista.appendChild(novoItem);
  }
}

// Chama a função para adicionar os itens na lista
adicionarItensNaLista();

// Função para pesquisar um item na lista
function pesquisarItem() {
  var termoPesquisa = document.getElementById("pesquisaItem").value.toLowerCase();
  var listaRolavel = document.getElementById("lista-rolavel");
  var resultado = document.getElementById("resultadoPesquisa");

  // Limpa o resultado da pesquisa anterior
  resultado.innerHTML = "";

  // Divide o termo de pesquisa em palavras-chave
  var palavrasChave = termoPesquisa.split(" ");

  // Oculta a lista rolável
  listaRolavel.style.display = "none";

  // Verifica se o campo de pesquisa está vazio
  if (termoPesquisa === "") {
      listaRolavel.style.display = "block";
      return; // Se o campo de pesquisa estiver vazio, saia da função sem fazer a pesquisa
  }

  // Percorre os itens da lista em busca das palavras-chave
  for (var i = 0; i < itens.length; i++) {
      var itemTexto = `${itens[i].nome.toLowerCase()} ${itens[i].cas.toLowerCase()} ${itens[i].tipo.toLowerCase()}`;
      var todasPalavrasChavePresentes = true;

      // Verifica se todas as palavras-chave estão presentes no texto do item
      for (var j = 0; j < palavrasChave.length; j++) {
          if (!itemTexto.includes(palavrasChave[j])) {
              todasPalavrasChavePresentes = false;
              break; // Se uma palavra-chave não estiver presente, saia do loop
          }
      }

      // Se todas as palavras-chave estiverem presentes, crie um elemento de resultado
      if (todasPalavrasChavePresentes) {
          var resultadoItem = document.createElement("table");
          resultadoItem.innerHTML = `
          <tbody>
              <tr>
                  <td>Produto: ${itens[i].nome}<br>CAS#: ${itens[i].cas}</td>
                  <td>Tipo da MP: ${itens[i].tipo}</td>
              </tr>
          </tbody>
          `;
          resultado.appendChild(resultadoItem);
      }
  }

  // Se nenhum resultado for encontrado, exibe uma mensagem
  if (resultado.children.length === 0) {
      resultado.innerHTML = "<p>Nenhum resultado encontrado!</p>";
  }
}

// Função para verificar o campo de pesquisa e mostrar a lista se estiver vazio
function verificarCampoPesquisa(event) {
  if (event.key === "Enter") {
      pesquisarItem();
  }

  var termoPesquisa = document.getElementById("pesquisaItem").value.toLowerCase();
  var listaRolavel = document.getElementById("lista-rolavel");
  var resultado = document.getElementById("resultadoPesquisa");

  // Verifica se o campo de pesquisa está vazio
  if (termoPesquisa === "") {
      // Se estiver vazio, exibe todos os itens novamente
      adicionarItensNaLista();
      listaRolavel.style.display = "block";
      resultado.innerHTML = "";
  }
}
