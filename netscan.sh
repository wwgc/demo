ips=$(nmap -sP 192.168.1.0/24 2>/dev/null | grep 'scan report' | awk '{print $NF}' |sed 's/(//;s/)//')

for ip in $ips
do
  mac=$(arp $ip | cut -f 4 -d' ')
  ptr=$(dig -x $ip| grep PTR |tail -n 1|awk '{ print $NF}')
  if [ $ptr == 'PTR' ]
  then
    ptr="none"
  fi
  echo "$ip,$mac,$ptr;"
done
