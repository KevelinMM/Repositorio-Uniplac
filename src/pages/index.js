import { useState } from "react";

export default function Home() {
  const [title, setTitle] = useState("Titulo do documento");
  const [subTitle, setSubTitle] = useState("Sub Titulo do documento...");
  const [description, setDescription] = useState(
    "Descrição do documento informando um breve resumo do que se trata."
  );
  const [autor, setAutor] = useState("Autor Fulando de Tal");
  const [type, setType] = useState("Artigo");
  const [date, setDate] = useState("06/02/2023");

  const [downloadLink, setDownloadLink] = useState(
    "https://lh3.googleusercontent.com/fife/AMPSemcEWmcbZgPw589q4vLAkz0p01tkokAXyBvfkocoX-uEEnzFitYXwexc-4_zPxwQ_mU1x9C6lCScEFvVWAOmgqZJx6G_eYzzeXB3iSZqfewjthg4eNZgo7LbA2wjg_r0UcnoPAC022zTIhugwu9KPgPVvMKzuiqnv06MN56F23tA5lqiOy-70MtJkDXF-dJxKXNakPEWje8xsDBJ_w65lxnjodunleHZyWS7r3SD9JNaQHEdOjwfdSDiqvCLNouMKMqbnY1T3GQrV6VQzAM1fbhAzSfR1rj-04M_SWyctR5e0D3qP30q4fsc66wfjYKd9K5YRySwtKctFiLaBoJqZ140994Czu2kKGWWyWtX5XdFN5fzonoFXb26C7Y7uDKfpB287MPxmE3yn8Fm-m1SHSNsx4zGj_wtVzVMwZX7vDqkdNfUxUfphKVqMRksNsDbvItq47J5-M7EawzS5W32sYwlgvFcP6HvQpSqKcOTxT4RFCvDOXSpD0ygdiOKO4Qg7uxDrPpdI71tpKQmxNnw4NhjCIR0H5d4zAVLThKLrYq8bZg8s9GO9Ojw0L1-4_EOgQt8eBtAfPybscIZlBhWqFKsArHGiX75gSrWgDbLmXOHkmvjPjencwn6V36nwW2w9_uuBaP3GlU6MJZAVG5njTK4DyJDiVVMjWX0v307gE-Y4XYlQceLcVZycHMZG9l5I2NwXksKhHvxQIjHWKS9gXDK8gC91YYNXnbaW5JHSbPwttOw1GWSdmb-toOEtZhjcEQupGJWqdgSQDmeQYzZs4GYCQHb-IjvJVgW6WZ1izVn9ZqWDqccpDwr0YLrOHJxGnY58LwEVNs18b-cwuEy03gVZzm1I536S87Fald1X_RfXlIzG4AYnXYUwm2m56gL68AxFUmXUjFC9WuDySRkBnSgVd9yyQqA3JIs2e0Qqfzd_fzZbyElo-2BHfazgoqrP_m_LIqfGZTLALDAT4hAtBhLyHf-ZZdm0TYzCGNbQqK8ateSKUAQEp6jbyeNOxaDSsqwIS6UaPmqSf_M-RZkIwnvFF6VcSt1P_bQuqhamIvo0gEtGDSxp8h3d0reckADJ4XroK10kPyBrRXRCHDabzftZczFY1kkYx1McEgXb3m7Pf0Xau32xFrbRg10kgI4jucwOZumDCIQG5c6meOvIIUhyc9puWvv2sfruR08U-qxwzqj_cf1ZoOLsbFKnaF0xxTfMnX261Xtwj_jDmz2dGw8ZTOem0e3zucwpVv5WsAVb_gHyTS2eLlEF0khttgtlyH_SIhaDiUPbJbfLbBQpoM6XNLgh1yOs9NEDmd00EHtyMntcy9nG287uivhsFd0Tbz2PMkCiewreX_YGQr2h_Y15yqte8Cx3EY9PHHyz9uGmyylP1UfThOts1z1N5D1EnV01RrtRxRJ7mKDVtPMUorgYEE6cxZRWuBnqys_Bi95EfB8UaTI9O_MaDz226mn0EN_jWRp0wHli22nFX0C8HoROBGdMx3GBEryLIHarjIP819xK37gMGHq1O6IhsaFBWhYzcj-qqIUfEvWlJQ75IN5F9ZsJy5LqldihmiRmyAJqjuKPuAKbgL8LT0Lo_FsO4Y-MzkizVWO-qWCrLU6drVyPYk5NPvHH4qN4CvexXXS5VgaixEKqKQtc-wOfF2GnvqehPcgbK2KkTs_3i9j39q5NNlVTEZrWYITGw1SFCpt1V1BNLb2xsr0XzM7K4c5vI9hp-jl_GlaF_xzFJDDW0gTYAbIVKCy3UKfnQWLP0D1ULIORNcu_Kv_8W6y7rSusswlVMPM_XVp-wX5nwZXIYbHuXRvj5oVlgS9WQafTIEQxaRbDk4KDEDm3RFALCp4Zn4WS-czYdx3l4iwTu5VmwpSkKkqnnsJmu1fOPQlldrgg59A0DFglmUGxeVMr0kgrjYugq3p4NRa9_M7gCpNymaAaMGM1s1FKs9vp38-MT172YomQaZrpSOGtyTyceVy1V7hj16BisYK_oUpCbSlOFO0ofdmTzud00Btiv7QF4FmwVxceTue_nEE_kl8qBVwnJ4kmlD30xtJyjnRMtl90ZXMeCLFVM3S38idiLRYgVCBmaistWqZYllCLcoH0a3TykMW20wt6saQ0OhajVTdCdzq-iXShuFFTI5Rzz0P7_GTGylEgDieyPI4xfWHdUd0oNYTGvfeBqsb66ROXFAru64tRR8bXZO8ywzqxWcsTDDPeCzbE47ArNFQst3MS_BIR6dzOoyb8hxWMZq9IIVvPCU7XIo9ed_XGf1UgZ6dzjqWqriEjkz3LiA-ray_bTN-4slmHeinqcibVkOPumjOhW1dgffvdFrlCL21I-rWbUUJso7n0IyKVCukiUzfJJJQvV5aYvE6gNie_hFJqMbwpjmp_B2HTw1crjlwmJrbKlhyPk51jwqOEQBL9Q3M-If8VFuWBHYKQcczvrA6PE399uml5r1TgCfE-t8Kmm8D6E1GOYvwrEJ1OU39LzwaXf-rgHYliJTimZKzibkIiE7PZoci33M2YSAZvNMRNVnfcxmLfzIgxqWx0Q0yXg8uH60N9g17tLB6DobIu-7IJwJ00PDnTOi4zlapBg2wQQGiiVXMokCg-CmaRuRy6-8yOzblYTJJgauUdg86h4yBAQogODBny-B8aOWGLFif-mtgZ5ts3OlO_p4w3WmESFboQVXLPVlrxq6I4nGR-WzQaQI1YV-9AsUgYw3JtetYvLVObz-PB6ALSNkxtZcTDnGrsxOXfGsR6XHIkPwhfGTWh0e5F7i-WAFwWmZDxVS3s7y93qlHbPl_JgrinMnkA778BBuI8fXHWpqGtjl3RImPlVpzFXG2RV62szdQTqqLwkPn1lrEg_CzHclo0busBz2VKVspM9tYmtQ1wD0kg5bXT_6lBeNrHeHKr1vhfinboI72clE-ctMeNmktjcJa2cAm_-79jlz8pdmJpXJ75SSWVuaGRg8FnWK4sCytTmqPxyDuiKo4q0cgyYAqmL7wJq6TpUjw2qb25DnnP9yRwhOv6X2ed-DqjjEKXD_RUz2OJebYjhy-2lXwpllbU5rRhlwIrNsfgaBTSCQ55zclc5Qkes54qyBtNgad2_UlpKtbC_82UxOkMMqBgLIe9ZnYT91aQO2CBpbcrxh2sAGOypvNlF8TWrkoeJb0DIFPDDcidzePGBydpywNtlD6PR0Un8BzbCCk7V1RACwFUUjGPqNXj1bP1ZaqHVMSxkYogC0IY5TJrwnEvH-wsV_S3qIpMRa-oi7JOdxQMgB-P3j6C5LY1f1qscoyqe4UjoCE-6RH9nBs96E5lo-RL3x1rqRAcaSAGBYFXaw467K7Z67ODv6ef8BaGwerjXetv5ajr62AwWdySzA3DYYew4Ikehbo-EabW-MOVf0_6qUNy--E1R0srKAoR2_nH-1roYzqDLJ2L6tMoC694XXyD73nLOkcqIUchIRXqD-w8Fj_hyYWqVmqTZNy1qNVSrsrV6OHIMsnMazIq2Y0MF7TWUgBFrz1EjnwtV0xvCn7WzOD6PYcQsDEx-aSu69oBVN-C3ihEXzS7k5D82fG50gkWZ4cIQg606Wg4jZXnYQ1KkfqXTjr24PDCN8OSIYPRgqchp82y7C0Fh2ZRxhsKX_eYewm8zRViN7Z3ZSPUzmE8_LXIFUvyoGSRXugGlkoke42UaK0if0HP5pfG-P7MryXTDOV8OUHVlG2rm3echSwlN-6t2-RrxQeixt5ZzS3e0O9TIX05US88m66MVWJHKHcajP-zn9Mw4ufXAiBKnWD0PKsDyWRqL1BvHcdy4QpJtb7QyTN99Olb33J4xYi_v_bIgGiorUDNMUJltjzEIACsHy59x_MhcUhVB9PWkTaNkTrnCHvJuoomWPLqWoeAe1_a05TJtgDLf0YiR2vQdA-MaX8REkqBJh6XJTfk0YMzNel2DHfbZVybmIcj164AxMH_gvcFwOLeJBVQiXoMcZJcnQNu-JUvGgu6xcZSYDDCpHJNgZv5fDILajJcTSYycUkX6V2tTRy_Mq2rY4IVlRvRxdTU4R9eJF6OHKk1x8JdAW1m4wchCyBwmj4Ln5F4KOxud3Cz3HAg2RiZEF4qGfSBnN7Qv1ajAwsD2TBcPS0oiUMPX2qX-8Os9RVTZfdvuSgIRDC6sSvnmaKrLZ21t-aFdL4sfI6qkH_yvntGSBpf-RVPq9Y-JljL42-LVVbQyKqdNfa5d657n4a-hbWIPyBVTj8ZUDwdzFhXxKBMlCfh8MNdJOZMBPZXQANY_TVBk4Pm-3pLrhd-Oi4EH2pu-VSypNDk6xPAZ3JTNp1BvpK9T2nXcrglrOdCsr77bxfReLfzQ8pooxa22LQlC4Ffxl1SY4wQqMS60wsprTgU1kFNMFA6s1zDiwKFBz9D6EjGAODN5AqKhovEfoHKI-BbZHX8bfCt_C7xcGl8MGBUl3biiAkNE5ddimJHQ0pndmZ00iVcjYZF6Opbf28WDt5_1-Ge6OHYvTFYou4fJDgRspqxk0bBS-3OUyYMrNcJG8fRLTgylB87ur0FePPPP7SM9WNv4XIge_o-r-tEr26f94dzZCSXTP2zNu-MhDUIGxGGBErcvvJTzhg46VklKVB8YDR6uJXY6RJLm0zqikJdpchFChi5hPi7eMNv0p2ynhlnmk8bb8_injF4rYtWHmZWVmDySNNVhuyM7RCerQte4ubJerGnu7sKS-Uq5LM0U8lO-USVDqCA-zPqx9Y7dXzWvjKkfdzfGuaMKRAhQyTc0ykJkPvf7wtsR_75a69wV3RrhvBZixtWwCEaSZ8Lytsu9eAZrwBgAB09t0_IbtE4b1SKNzvtJjDkbNChBUCXxuXQD4mpew5KJGhoLVPq_RQdt7VfSFIAzJ3zmvqIRsctWY50LmynPnhAYje-lhHKLGg_acthSLTQAVRieUt-oqo15YBdqZVa2jCXkWkhD-8-1xhSYvm5Y2qW7DPbZTABK25JBGjiFm6E9XTnr7VcOxWQ2dbD9yy2SJh24SWIi9Lf1dTuy6ixftry1wN7BKWB6yKAc7qWMruFEesuvLLChwZ3cMqwkz6DpAm11TCXDCmebWQw4GaKMIqB9Su85bvvdmkrM4V0OWwORS_y8BOz5fNPYEjhVBjhs2xlZsbbf3Ds0GN-cW0qc5u9l4OKelmMo37aQ4qwdpSZcVWvAtNdUv4bEM4b-aiCIrjmlu6-NQL5Y8i2hB8QLK9P09XqCEb1TSK5Cnp8bEKYldLqyiOeKHaYbEiiqiVRmwqAwY2uNEOIt4kKlK9Bnr8-hUA9j5Hvwr1sfEz5JBGcFLCSysqC130rUj9FckJGXh1whM6PZ9OkYan9uqn2yDhNTdeRboRiT0rXxCch4ATx3s0u3BZal8XmMvzTE9sLKMax43D7N606HRskXlLn8hFO03nA4N3uTp2aftu7kiIwTefYWJDzjw5AV9YK158009zGzCXZV1s7hpo7DjN7Z0wDmPvUDkUPCCxRSQ-E5k2J2YAOP6615q6PiRftE7oRro73afsFS4pNj_hGIuZTT7zStijl0QSCoQALk7-ntuQW6Vb8x_xTq9KXSd2xk8nrOKqNncIhJcAE2Xoy11TwkXFd4E_rFobSa7-aBsktRm3qbEz_a3wr1_RR6OkSXT4_HSFGDTg-vQ4aBReTmGoAwSk4aBYFQhnkqF2hpoOr57fhZQkZvCwcywHWwt4n8mfl9Yvpm_h-iihGe4EiTl_UjhUduH8mRRW6FjBOY2fLPDfdE7tGd5qtYnEux8Jz4FWkPIAnKm3jbYLUUvaZLd5KWHAUakeDnyNIXFg_A1EUYWo9RYH0b0MsN7ge4NtGU4_v62koGgL8TsdM15qseZ67G-fuEksA3nwgeMQSAMkDZ8UTMvHGBBO7sMtU8SeUS3a9u7U5CcB-G7oz4F1fVCMC-Hcl7PYq217Q6UP7Yo7u4vcTTCBb5YV2AtOSaV61UN5tPwBtKSamJ7nNL_Z0ChRgOUucUnWjEz5kM_wpsgjkyjJqPR7s-HGvrmk1-Hg9moH_Nlx0Fd2jkWqJMjWJIlDweGvSj7T73gpsiY2pfE31q-fSSY_G6w7Ek3C0-NVWK_bOkO1A7tlrxfk-1LVRMhmUcuX3aOUjBn0Q1_jjazca4KGv74jF2-4r174_xQfW8837OjmqEdIizf3WDELmXgy9CAviVx073IYKFktqigakvEQMIVteV7Q3gpj1ncxXTBcu1PWkxsoM5385dh9WHCBmsSCDc8ie7e3IBUV8TN7V-q1ard6ivfxT61l1PbXLnFhu51L8P66Lo5uZiQgQj9xNJHpIHIXi7CaGMHIApyhAOeN_hEOAK66AX2mMOItzreHPpjCgudJXcSWTNafBYowZAZGJkRKo55Bq2thZZlNsZLS2YoyDDALXyO9wRDnmG7pECtdz0oJhbBobAYWRlu9VccrVIVjvGEScaGtx2x-1svABTB4EwnC_gZNJouaX0eoFLoNFtY6P1GC4RkIgb7yUgMFUTEslrzuJ82KYRBLtE3p0wFGZgzSb1QBXgwr6Frh_qLC81RuXvLRXqv3Z2HIP304GOmweF9HotMSdcBmBehJZUUDkjHHRDzMI-EIRynsU3ikZHZ-eevBHee50hZT76t8CWVpdJxdhBc3VoqhBcvg74KY-PKkB7Wcr7brCDz6VUjxpRt9OO_ev3agv12d5PF_1IZY-_68258G3GSUOpWXVxq6e3Inz6lUDeBMwlAY6zCugNgY2P8q_3y2AF014BR644e2ZOMyRJO9tSCxdzYkkpdBoNKbwmY5jxkrAjLKjZKfjjc9zLeFKg_ouYYoiLaDR5XGkF7ksCFm7bZUpGFMVFiPwccS3xuWKboJ5Zvk_SzAtpjU0LqEIc8ilPfZi6Of4h4yoxLkXyOHYows-agv_HBDQiozoDNQXME39u9rXtHjUmwlEI5GwNPMDlja2qHg3mXlDAYNjbY_474u6mfT4CwADtwj6v0pArb14geAI9LAqu1-X2CLhUx9LU5ad5hhF8N-r-PPAS-Z-mRGTWbz7f-GTc2_NG6m_i2JN5O2CGmYrX4UFgLI4RrJpGeGR90AGclPM7d018W2PdW9g2j5QbcqSi0GkOfYsVMSwKjejwT09aliepCMCgUSSotjIgwM9fYtXaZ3ILuLJVy0SJLABaGf6ox4OyTN36NCL0zFVQtTVbw19SuhbYv82cbCr5qtehskxPQwbjC46mAJgspaWAWuiVfVCHBT7XQwc9BuiWQ79QEvwnXSI_v1E4Bl950qCIpQ_ZUoky0AaGBoCWuKvzRFXbIr1eT64aROq-kTsAcHMARRKSWT-ohzy2vLU4q8YK9pJF04CWFoWP9k0n-4id2ZtKw8vsCpmK5i2tC_xZM6E6mHrBGGhAGx5KjItPJcJnbe9SVO4JBRX2ts14unI3-nmAf2cM28DduurhvN3AlInPX_i-Vf58fopkZ8y80sc3JaMRXvoqA3cbMzP_Wnb26tUkNbsBpt7lEdncEeOW1Xup_-s-MZ0w-LKwUSg6320DWE-6pQtxlF8qZO4NhB5GRCDnhxwOZIbxiyZt1BFy1u8yVwHuuBijGKlSXjW6nICW6i3y-ZJ6D9s7Qz9koy3FxgZuhlWkdw0SEbmj2fe-ivZkSyrqaver9cBhVf4MtoIBTzECZW7GO-cMIncALfLh2656i8whkbosW4rRzI948H_DRPe7bkIiSNj1hqwzYfyF9-8Oi0Jm4vZ7SF16S-_wkWalYRSxwqWcL7UZuLN12nUMD4OYQc7DQ0-Oyd82pBIzzTQNVq28mO6VLLWho1gQPwhQAnbzlMM27vDlZPSHbugfk77rSoBNVian-pQwg3IyVbMyNllPKuu73w5XrZ01U5MHIiWSJdr-LGAxJ1fI5H9rVsLS9WNAyTEgpMb-KGGq6V0EXNxWX5IiHh6-TQSNtLQdmvwXh4vkHT5EZqAJKlCGhcwWkNsGvCMC7vZj3mXXzo6OtsEfEpoawmDxEOPZZtBgkAHWnSHliaKvU6auqjytMZSL3hxOmUNcIoItIwh5hjUMQ_P64AORLUxjS2ibZrCToOjAvODqQ_uccfG7_uWY419XK4TlQJSkSbI-Z09CQHV6avR4f3E4Dft4_v3XIgtNiBhqKVcn_TMM6plM7Umug4znLtCfYTNySbU7-LUK4Tl4cfxFMuR9l3RmqF093lE8gxLr17fh4uSm9k91JZwbsLz6RUyHtj71P4FYGVps8U6deuX_AhNSbeUKSsCoNxSoFe0a63ky530UiR7SpUadAwqKSKp60rnLwGMTCGLhE7sXCOhmCXH53uzo6ZCke7fhRDMBHW_OVJyuxwb-t-RPzDfdui5JS20IYu4fAws0C74DQGlEorsXcDHZP7zqlrebPzLkxwlOFoLhbDj8aVYHbLkWcvRcfQqpp1C4-CGHe2iNncgDMl355Y4coKCAnXnIx3lrmH_YKJYVh6xa7s9y8hI_KR5GoPqtbmR_kkJ7WWAtyL5qX2Cssypc-o6TbKfouVpqS6mXsl01kOAYxvCmSOYv05skyAqM3crpomaaHzsJEFhPvS5U1caXlA8l1d_EjyyVzwK2VF-tn4hVIo95PEA1geZPkIJLn5bc2gfUp47O5DhKJb_JL7mjlB0vfwZLahRyI1yaxY3QWA5OTORstPfQgHyo0QQNa9XsdnoKzo4LDBnajNDhG2NW0bCGNL3BYrOyNKiGr-G0BJmFmLMAwOCWR-lPO5Wu77GIgK06OZBoPXExWhwhWn_unRRHNxE3aRYiwzhciyrlrUv_rziUaUjbzEykjGdGdHw7A5IMZqPIFzGGd_IxVkonOyL5AALZ9d3Tm4uhH3L9lD9oc8gYkkRwWPAcXXzpo0MmSVXbeptfERVa36x_7QE_VpkbMRl0pizvxhq5o4GCAIc_UFHsk619T_WYS0ObSM9H8yb_QZtWOkiFDOlOjAPiAR0SgjGaGNYEkrwoKlm4vzoC_pFwHLkTSYIqmFtkPbHYzg0FOcK97xwaGwfgsg40hGO-S2uC7WZbOVjOUGtuCx3GTWLX9Jw60Kv2-Hpgi_rj-MY-rpB40e8T_PKYGpzBwOq5PVWK0N0vdFlIo6ZRLnfVmKlGigrLemcKL9P6wAGHt9aN1iwUOEELN66VsSA9CodlhPUMPUGD5ouwJ77X8jnFPZzKclvnGzvqLzgn5KKZns2cYvu3gpzx47K7pFgxrwHcx5uXHmSxJwg1HybSc5YsNLYO-AUzzRlonBskjTrTtBD5U9svOVm_MTSJDLXRZ0ABEMwvNfPca4W74eQH99NNeTPfT6Qndz-amSjVKFIApJaz2lpo4sw0V3_lJDGPdeqL1sqfDQFzpeP2VJKhvjorNFNVHfeV6lIGxIqKOLfePp9UzuSsDlqctCIuP00qzMpkeK1T8UTq2vnOsg4msuMYWk6mxXP68nytMrq5ny5ne7Ov56u6EmBto1Yv_fVbKP8VP5gMwCfxXha7ltfFXD2VFWffsqcqTB5xOyjqJaKND8_Y5-K_-7QZA55hiN3aer8xEFDf94G3qQpk7mi3eogmGpFa2skkftdCzO5ZWbYYvsVBUUGsyYap-wRKK48S9QpOcLAhnZEFwLTRu7FvHoA1-K15YqpLcugX_CUDAB0MkR1FEVTTxdAxvQID1nRVkrReQXZjfbKj4nwnbBQ3j6CiJ5BG5-q0YxWIvRxAg5b3xo9XnSanO4qJ-fkxDpSavMBen0nuUaPT2lVzJsduJQ2Dyh3AGKgRiQCKu8J5AH2maTYGqkFcnZrf6_Qj1y9-rTYU9lEAigbs3EKQmSNwdztbfs6Q4LH_qDjTSRiZCOdNWeCrVNiK4TEpHNDGPBHMPbp9inxHxLqz52_L4yjd1Yv9ya0qP8U1gbl67le6wh3fwPyB9zvP1zaE72qXPuL-HDK0hzgfTzzYocSnYFO5OyEIkC3bpAwRAs1s7WIsIr7Tc4-GrfxCbOfrTYryVKrExAQBx-s9TSJTVQzaNyZ9Nhyk-9rdS1swMw6jv7Uhsc5mgujVmduT9o4g2iXabMDiSu5qH-EPZJst8nouEhTg5DuZ5ko1gO7z_eQxw9_Nq39Hlcxt3MuZF5bgyCWGwCRYWOXk7ZudQalzaBAzrpY3brg34qrmbOC0WuRNSBb7GLSBv6W4DoZ6E8i51KG0-KTS3avWU9haVavxqT7XVEcbQ9pZF_SUoGn0B7ehC1tSt8RTcqJh54nsfUxPtwIzZdBXAGmVC9ZNHJdYfL-eOuBwxOigUh8Xwwc9CIRmAwdnu5ZphB6o3cv8xptWoIxaJ6vSvRH8SdNKApJcm3tPd51udv5b97AdB3r25OPmVQxfyDtVr_MYAW5svvMWvUrXUUiC2mZjdfVMmIeXVFwxfitywigXNRVjEb41V2qYBGGQ?authuser=0"
  );

  return (
    <section className="bg-gray-100 tracking-wider tracking-normal">
      <div className="container w-full flex flex-wrap mx-auto px-2 pt-8 lg:pt-16 mt-16 min-h-screen">
        <div className="w-full lg:w-1/5 lg:px-6 text-xl text-gray-800 leading-normal">
          <p className="text-base font-bold py-2 lg:pb-6 text-gray-700">TAGs</p>
          <div className="block lg:hidden sticky inset-0 ">
            <button
              id="menu-toggle"
              className="flex w-full justify-end px-3 py-3 bg-white lg:bg-transparent border rounded border-gray-600 hover:border-blue-500 appearance-none focus:outline-none"
            >
              <svg
                className="fill-current h-3 float-right"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </button>
          </div>
          <div
            className="w-full sticky inset-0 hidden h-64 lg:h-auto overflow-x-hidden overflow-y-auto lg:overflow-y-hidden lg:block border border-gray-400 lg:border-transparent bg-white shadow lg:shadow-none lg:bg-transparent"
            id="menu-content"
          >
            <ul className="list-reset">
              <li className="py-2 md:my-0 hover:bg-blue-100 lg:hover:bg-transparent">
                <a
                  href="#"
                  className="block pl-4 align-middle text-gray-700 no-underline hover:text-blue-500 border-l-4 border-transparent lg:hover:border-gray-400"
                >
                  <span className="pb-1 md:pb-0 text-sm">Educação</span>
                  <span className="bg-blue-200 rounded-full text-xs p-1 ml-2">
                    {25}
                  </span>
                </a>
              </li>
              <li className="py-2 md:my-0 hover:bg-blue-100 lg:hover:bg-transparent">
                <a
                  href="#"
                  className="block pl-4 align-middle text-gray-700 no-underline hover:text-blue-500 border-l-4 border-transparent lg:hover:border-gray-400"
                >
                  <span className="pb-1 md:pb-0 text-sm">Pedagogico</span>
                  <span className="bg-blue-200 rounded-full text-xs p-1 ml-2">
                    {37}
                  </span>
                </a>
              </li>
              <li className="py-2 md:my-0 hover:bg-blue-100 lg:hover:bg-transparent">
                <a
                  href="#"
                  className="block pl-4 align-middle text-gray-700 no-underline hover:text-blue-500 border-l-4 border-transparent lg:hover:border-gray-400"
                >
                  <span className="pb-1 md:pb-0 text-sm">Filosofia</span>
                  <span className="bg-blue-200 rounded-full text-xs p-1 ml-2">
                    {42}
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-4/5 p-8 mt-6 lg:mt-0 text-gray-900 leading-normal bg-white border border-gray-400 border-rounded">
          <div className="font-sans">
            <span className="text-base text-blue-500 font-bold">&laquo;</span>{" "}
            <a
              href="#"
              className="text-base md:text-sm text-blue-500 font-bold no-underline hover:underline"
            >
              Voltar
            </a>
            <h1 className="font-sans break-normal text-gray-900 pt-6 text-xl">
              {title}
            </h1>
            <h1 className="font-sans break-normal text-gray-700 pb-2 text-base">
              {subTitle}
            </h1>
            <hr className="border-b border-gray-400" />
          </div>

          <p className="py-6">{description}</p>

          <a
            className="hover:bg-green-500 bg-green-600 cursor-pointer flex flex-row px-2 rounded text-white w-32"
            href={downloadLink}
            download={title}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              className="w-4 mx-1 invert"
            >
              <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
            </svg>

            <p className="text-lg">Download</p>
          </a>

          <blockquote className="border-l-4 border-blue-500 italic my-8 pl-4 md:pl-8">
            <p className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="w-3 mr-2"
              >
                <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
              </svg>
              Autor: {autor}
            </p>
            <p className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="w-3 mr-2"
              >
                <path d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z" />
              </svg>
              Tipo: {type}
            </p>
            <p className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="w-3 mr-2"
              >
                <path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z" />
              </svg>
              Data: {date}
            </p>
          </blockquote>
        </div>

        <div className="w-full lg:w-4/5 lg:ml-auto text-base md:text-sm text-gray-500 px-4 py-6">
          <span className="text-base text-blue-500 font-bold">&lt;</span>{" "}
          <a
            href="#"
            className="text-base md:text-sm text-blue-500 font-bold no-underline hover:underline"
          >
            Voltar
          </a>
        </div>
      </div>
    </section>
  );
}
